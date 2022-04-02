const mongoose = require('mongoose');


//create schema with field names
const EmployeeSchema = new mongoose.Schema({
    empid: { type: String, required: true, trim: true },
    empname: { type: String, required: true, trim: true },
    NIC: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: Number, required: true },
    type: { type: String, required: true, trim: true },
    hrRate: { type: Number, required: true},
    leaves: { type: Number, required: true},
});

const Employee = mongoose.model('employees', EmployeeSchema);

module.exports = Employee;
