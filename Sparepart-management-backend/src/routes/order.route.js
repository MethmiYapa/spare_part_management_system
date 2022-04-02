const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

const orderAPI = () => {
    router.post("/add-order", orderController.addOrder);
    router.get("/get-order", orderController.getOrder);
    router.delete("/delete-order/:id", orderController.deleteOrder);


    return router;
}

module.exports = orderAPI;