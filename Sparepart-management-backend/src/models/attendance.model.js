const mongoose = require('mongoose');


//create schema with field names
const AttendanceSchema = new mongoose.Schema({
    crntdate: { type: String, required: true,  trim: true },
    crntTime: { type: String , required: true,  trim: true },
    empid: { type: Number, required: true },
    
});

const Attendance = mongoose.model('attendances', AttendanceSchema);

module.exports = Attendance;
