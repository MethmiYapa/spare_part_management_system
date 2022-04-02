const express = require('express');
const router = express.Router();
const controller = require('../controllers/catogary.controller');


module.exports = function () {
router.post('/create', controller.createCategory);



return router;
}