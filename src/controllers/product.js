import Product from "../models/product";
import slugify from "slugify";
import Category from "../models/category";

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
//Get a product follow slug
export const get = async (req, res) => {
    const condition = { slug: req.params.slug }
    try {
        const product = await Product.findOne(condition).exec();
        res.json(product);
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
    req.body.slug = slugify(req.body.name);
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

//Search product 
export const searchProduct = async (req, res) => {
    const searchInput = req.query.searchText ? req.query.searchText : "";
    try {
        const result = await Product.find({name: { $regex: new RegExp(searchInput), $options: "i"}})
            return res.json(result);
        }
    catch (error) {
        res.status(400).json({
            message: "Something be failed"
        })
    }
}