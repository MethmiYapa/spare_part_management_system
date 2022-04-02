const express = require('express');
const router = express.Router();

const SupplierController = require('../controllers/supplier.controller');

const SupplierAPI = () => {
    router.post("/add-supplier", SupplierController.addSupplier);
    router.get("/get-supplier", SupplierController.getSupplier);
    router.delete("/delete-supplier/:id", SupplierController.deleteSupplier);
    router.get("/get-supplier/:id", SupplierController.getSupplierById);
    router.put("/update-supplier/:id", SupplierController.updateSupplier);

    return router;
}

module.exports = SupplierAPI;