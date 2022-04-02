const mongoose = require('mongoose');

//create schema with field names
const insertpaymentSchema = new mongoose.Schema({
    Paymentid: { type: Number, required: true, unique: true, match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/] },
    BillType: { type: String, required: true, trim: true },
    BillDate: { type: String, required: true, trim: true },
    BillAmount: { type: Number, required: true },
    Checkedby: { type: Number, required: true },
});
const Payment = mongoose.model('payments', insertpaymentSchema);

module.exports = Payment;