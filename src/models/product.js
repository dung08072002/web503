import mongoose, { ObjectId } from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
