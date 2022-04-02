const Customer = require('../models/addcus.model');


//add customer
const addCustomer = async(req, res) => {
  try {
    if (req.body) {
        const addcus = new Customer(req.body);
        await addcus.save()
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

module.exports = {
  addCustomer
}