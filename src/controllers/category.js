import Category from "../models/category";
import slugify from "slugify";
import Product from "../models/product";

//List category
export const list = async(req,res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories);
    } catch (error) {
        res.status(400).json({
            message: "Get all categories failed"
        })
    }
};
//Get products by category
export const read = async (req,res) => {
    try {
        const category = await Category.findOne({slug: req.params.slug}).exec();
        const products = await Product.find({category: category}).populate('category').select('-category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            message: "Get products by category failed"
        })
    }
}
//Create category
export const create = async (req, res ) => {
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Create category failed"
        })
    }
};
//Update category
export const update = async (req, res) => {
    const condition = {_id: req.params.id};
    const update = req.body;
    const optional = { new: true };
    try {
        const category = await Category.findByIdAndUpdate(condition, update, optional).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Update category failed"
        })
    }
};
//Remove category
export const remove = async (req,res) => {
    const condition = {_id:req.params.id};
    try {
        const category = await Category.findByIdAndDelete(condition).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Delete category failed"
        })
    }
};