import Product from "../models/product";
import slugify from "slugify";

//List product
export const list = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Get all products failed"
        })
    }
};
//Get a product
export const get = async (req, res) => {
    const condition = { slug: req.params.slug }
    try {
        const products = await Product.findOne(condition).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Get a product failed"
        })
    }
};
//Create product
export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name);
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Create product failed"
        })
    }
};
//Update product
export const update = async (req, res) => {
    const condition = { slug: req.params.slug };
    const update = req.body;
    const optional = { new: true };
    try {
        const product = await Product.findOneAndUpdate(condition, update, optional).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Update product failed"
        })
    }
};
//Remove product
export const remove = async (req, res) => {
    const condition = { _id: req.params.id };
    try {
        const product = await Product.findOneAndDelete(condition).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Delete product failed"
        })
    }
};