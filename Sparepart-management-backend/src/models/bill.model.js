const mongoose = require('mongoose');

//create schema with field names
const BillSchema = new mongoose.Schema({
    BillId: { type: Number, required: true },
    CustomerId: { type: Number, required: true },
    ItemId: { type: Number, required: true },
    ItemQty: { type: Number, required: true },
    PaymentMethod: { type: String, required: true, trim: true },
    Remark: { type: String, required: true, trim: true },

});

const Bill = mongoose.model('bill', BillSchema);

module.exports = Bill;