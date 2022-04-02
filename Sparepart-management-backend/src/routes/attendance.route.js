const express = require('express');
const router = express.Router();

const AttendanceController = require('../controllers/attendance.controller');

const AttendanceAPI = () => {
    router.post("/add-attendance", AttendanceController.addAttendance);

    return router;
}

module.exports = AttendanceAPI;