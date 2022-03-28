import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
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
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

userSchema.methods = {
    authenticate(password) {
        return this.password == this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return;
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex');
        } catch (error) {
            console.log(error)
        }
    }
}

userSchema.pre("save", function(next) {
    try {
        this.salt = uuidv4();
        this.password = this.encryptPassword(this.password);
        next();
    } catch (error) {
        
    }
})

export default mongoose.model('User', userSchema);
