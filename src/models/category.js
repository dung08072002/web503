import mongoose, { Schema } from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
}, { timestamp: true });

export default mongoose.model('Category', categorySchema);