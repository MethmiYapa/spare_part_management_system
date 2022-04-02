const Attendance = require('../models/attendance.model');

//add Attendance
const addAttendance= async(req, res) => {
    try {
        if (req.body) {
            const attendance = new Attendance (req.body);
            await attendance .save()
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        } else {
            console.log('Please enter body values');
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}



module.exports = {
    addAttendance
}