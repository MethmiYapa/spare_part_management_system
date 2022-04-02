const mongoose = require('mongoose');

//create schema with field names
const calculateSalarySchema = new mongoose.Schema({
    Employeeid: { type: String, required: true, trim: true, unique: true },
    Attendence: { type: Number, required: true },
    Salary: { type: Number, required: true },
    OTHourse: { type: Number, required: true },
    OTPayment: { type: Number, required: true },
    Totalsalary: { type: Number, required: true },

});


const Calculate = mongoose.model('calculates', calculateSalarySchema);

module.exports = Calculate;