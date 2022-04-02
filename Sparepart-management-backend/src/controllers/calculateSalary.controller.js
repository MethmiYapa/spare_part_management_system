const CalculateSalary = require('../models/calculateSalary.model');

//add payment

const addCalculateSalary = async(req, res) => {
    try {
        if (req.body) {
            const calculateSalary = new CalculateSalary(req.body);
            await calculateSalary.save()
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

const getCalculateSalary = async(req, res) => {
    try {
        await CalculateSalary.find({})
            .then((data) => {
                res.status(200).send({ data: data });
            })

        .catch((error) => {
            res.status(500).send({ error: error });
        })

    } catch (error) {
        res.send({ error: error.message });
    }
}



const deleteCalculateSalary = async(req, res) => {
    try {
        if (req.params.id) {
            await CalculateSalary.findByIdAndDelete(req.params.id)
                .then(data => {
                    res.status(200).send({ data: data });
                })
                .catch(error => {
                    res.status(500).send({ error: error.message });
                })
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}

module.exports = {
    addCalculateSalary,
    getCalculateSalary,
    deleteCalculateSalary
}