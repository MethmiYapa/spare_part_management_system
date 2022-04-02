const Category = require("../models/catogary");



const createCategory = async (req, res) => {
if (req.body) {
//create object //up difine
const category = new Category(req.body);
await category
.save()
.then((data) => {
res.status(200).send({ data: data });
})
.catch((error) => {
res.status(500).send({ error: error.message });
});
}
};
module.exports = {
    createCategory,
    };