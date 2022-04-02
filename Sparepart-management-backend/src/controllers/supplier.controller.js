const Supplier = require('../models/supplier.model');

//add supplier
const addSupplier = async(req, res) => {
    try {
        if (req.body) {
            const supplier = new Supplier(req.body);
            await supplier.save()
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

const getSupplier = async(req, res) => {
    try {
       await Supplier.find({ })
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

       const deleteSupplier = async (req,res) => {
        try {
            if(req.params.id){
                await Supplier.findByIdAndDelete(req.params.id)
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


const getSupplierById = async(req, res) => {
    if(req.params.id){
        await Supplier.findById(req.params.id)
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            });
    }
}

const updateSupplier = async(req, res) => {
    if(req.body && req.params.id){
        await Supplier.findByIdAndUpdate(req.params.id, { $set: req.body })
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error })
            });
    }
}
     

module.exports = {
    addSupplier,
    getSupplier,
    deleteSupplier,
    getSupplierById,
    updateSupplier
}