const express = require('express');
const router = express.Router();

const CalculateSalaryController = require('../controllers/calculateSalary.controller');

const calculateSalaryAPI = () => {
    router.post("/add-calculateSalary", CalculateSalaryController.addCalculateSalary);
    router.get("/get-calculateSalary", CalculateSalaryController.getCalculateSalary);
    router.delete("/delete-CalculateSalary/:id", CalculateSalaryController.deleteCalculateSalary);

    return router;
}

module.exports = calculateSalaryAPI;