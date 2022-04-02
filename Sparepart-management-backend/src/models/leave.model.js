const mongoose = require('mongoose');


//create schema with field names
const LeaveSchema = new mongoose.Schema({
    empid: { type: String, required: true, trim: true  },
    reqid: { type: Number, required: true },
    empname: { type: String, required: true, trim: true },
    sdate: { type: String, required: true, trim: true },
    enddate: { type: String, required: true, trim: true },
    nodays: { type: String, required: true, trim: true },
    remleave: { type: Number, required: true },
    description: { type: String, required: true, trim: true },

});
    

const Leave = mongoose.model('leaves', LeaveSchema );

module.exports = Leave;
