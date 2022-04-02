const mongoose = require('mongoose');

//create schema with field names
const SupplierSchema = new mongoose.Schema({
    supplierId: { type: Number, required: true },
    supplierName: { type: String, required: true, trim: true },
    nic: { type: String, required: true, trim: true, match:[/^[0-9]{12}$/]},
    address: { type: String, required: true, trim: true },
    email: { type: String, required: true, match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/] },
    phoneNum: { type: String, required: true, match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/] },
    country: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true }
});

const Supplier = mongoose.model('suppliers', SupplierSchema);

module.exports = Supplier;