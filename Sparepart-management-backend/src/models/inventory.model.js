const mongoose = require ('mongoose');

const inventoryschema = new mongoose.Schema({
    itemid: {type:Number, required: true},
    itemname: {type:String, required: true, trim: true},
    brand: {type:String, required: true, trim: true},
    quantity: {type:Number, required: true},
    buyingprice: {type:Number, required: true},
    sellingprice: {type:Number, required: true},
});

const Inventory = mongoose.model('inventories', inventoryschema);

module.exports = Inventory;