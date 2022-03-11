import mongoose from "mongoose";
const Product = mongoose.model('Product', {name: String})
//List product
export const list = (req, res) => {
    res.json(products);
};
//Get a product
export const get = (req, res) => {
    const result = products.find(item => item.id === +req.params.id);
    res.json(result);
};
//Create product
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Create product failed"
        })
    }
    products.push(req.body);
    res.json(products);
};
//Update product
export const update = (req, res) => {
    const newProducts = products.map(item => item.id === +req.params.id ? req.body : item);
    res.json(newProducts);
};
//Remove product
export const remove = (req, res) => {
    const newProducts = products.filter(item => item.id !== +req.params.id);
    res.json(newProducts);
};