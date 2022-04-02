const Leave = require('../models/leave.model');

//add Leave
const addLeave= async(req, res) => {
    try {
        if (req.body) {
            const leave = new Leave (req.body);
            await leave .save()
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
    addLeave
}