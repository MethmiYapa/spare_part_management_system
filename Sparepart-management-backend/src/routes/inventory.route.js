
const express = require('express');
const router = express.Router();

const InventoryController = require('../controllers/inventory.controller');

const InventoryAPI = () => {
    router.post("/add-inventory", InventoryController.addInventory);
    router.get("/get-inventory", InventoryController.getInventory);
    router.delete("/delete-item/:id", InventoryController.deleteInventory);
    router.get("/get-inventory/:id", InventoryController. getInventoryById);
    router.put("/update-inventory/:id", InventoryController.updateInventory);
    
    return router;
}

module.exports = InventoryAPI;