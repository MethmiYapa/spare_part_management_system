const express = require('express');
const router = express.Router();

const addcusController = require('../controllers/addcus.controller');

const addcusAPI = () => {
  router.post("/add-customer", addcusController.addCustomer);
  

  return router;
}

module.exports = addcusAPI ;