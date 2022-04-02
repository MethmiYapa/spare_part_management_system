const Order = require('../models/order.model');

//add order

const addOrder = async(req, res) => {
    try {
        if (req.body) {
            const order = new Order(req.body);
            await order.save()
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

const getOrder = async(req, res) => {
    try {
       await Order.find({ })
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


       const deleteOrder = async (req,res) => {
        try {
            if(req.params.id){
                await Order.findByIdAndDelete(req.params.id)
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

module.exports = {
    addOrder,
    getOrder,
    deleteOrder
}