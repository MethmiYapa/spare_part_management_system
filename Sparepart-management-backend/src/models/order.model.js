const mongoose = require('mongoose');

//create schema with field names
const insertorderSchema = new mongoose.Schema({
    supplierid: { type: Number, required: true },
    orderid: { type: Number, required: true },
    itemid: { type: Number, required: true},
    orderquantity: { type: Number, required: true },
    netamount: { type: Number, required: true },
});
const Managerorder = mongoose.model('Orders', insertorderSchema);

module.exports = Managerorder;