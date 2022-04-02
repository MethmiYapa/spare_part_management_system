const mongoose = require('mongoose');


//create schema with field names
const addcusSchema = new mongoose.Schema({
  customerid: {type: Number, required: true},
  fullname: {type: String, required: true, trim: true},
  primaryphone: {type: Number, required: true},
  streetaddress: {type: String, required: true, trim: true},
  dateofbirth: {type: String, required: true, trim: true},
  emailaddress: {type: String, required: true, trim: true},
});

const Customer = mongoose.model('customers', addcusSchema);

module.exports = Customer;