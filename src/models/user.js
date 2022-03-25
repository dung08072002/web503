import mongoose from "mongoose";
import { v4 as uuid4v } from "uuid";
import { createHmac } from "crypto";
 
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLength: 30
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        minLength: 8,
        require: true
    }
}, { timestamps: true });

userSchema.methods = {
    encryptPassword(password) {
        if(!password) return;
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex');
        } catch (error) {
            console.log(error)
        }
    }
}

userSchema.pre("save", async function save(next) {
    try {
        this.salt = uuid4v();
        console.log(this.password);
        this.password = this.encryptPassword(this.password);
        return next();
    } catch (error) {
        return next(error)
    }
})

export default mongoose.model('User', userSchema);
