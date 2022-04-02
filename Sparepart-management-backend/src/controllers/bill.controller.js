const Bill = require('../models/bill.model');

//Add bill
const addBill = async(req, res) => {
    try{
        if (req.body) {
            const bill = new Bill(req.body);
            await bill.save()
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

const getBill = async(req, res) => {
    try {
       await Bill.find({ })
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

       const deleteBill = async (req,res) => {
        try {
            if(req.params.id){
                await Bill.findByIdAndDelete(req.params.id)
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
    addBill,
    getBill,
    deleteBill
}





        


    


