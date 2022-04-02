const Inventory = require('../models/inventory.model');

const addInventory = async(req, res) => {
    try{
        if(req.body){
            const inventory = new Inventory(req.body);
             await inventory.save()
                .then((data) => {
                  res.status(200).send({ data: data});
                })

             .catch((error)=> {
                 res.status(500).send({error: error})
             });
        } else {
            console.log("please enter body values");
        }
    } catch (error) {
        res.send({error:error.massage});
    }
}

const getInventory = async(req, res) => {
    try {
       await Inventory.find({ })
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

       const deleteInventory = async (req,res) => {
        try {
            if(req.params.id){
                await Inventory.findByIdAndDelete(req.params.id)
                .then(data => {
                    res.status(200).send({data: data});
                })
                .catch(error => {
                    res.status(500).send({error: error.message});
                })
            }
        } catch (error) {
            res.send({error: error.message});
        }
    } 

    const getInventoryById = async(req, res) => {
        if(req.params.id){
            await Inventory.findById(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                });
        }
    }

    const updateInventory = async(req, res) => {
        if(req.body && req.params.id){
            await Inventory.findByIdAndUpdate(req.params.id, { $set: req.body })
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        }
    }

module.exports = {
    addInventory,
    getInventory,
    deleteInventory,
    getInventoryById,
    updateInventory
}






