const Employee = require('../models/employee.model');

//add Employee
const addEmployee= async(req, res) => {
    try {
        if (req.body) {
            const employee = new Employee (req.body);
            await employee .save()
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
    addEmployee
}