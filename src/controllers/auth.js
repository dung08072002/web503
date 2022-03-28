import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email exist, Please use other email"
            })
        }
        const user = await new User({name, email, password}).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.json(400).json({
            message: "Can not create account"
        })
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        res.status(401).json({
            message: "User does not exist"
        })
    };
    if(!password){
        res.status(401).json({
            message: "Wrong password"
        })
    }    
    const token = jwt.sign({email}, "dungnv", {expiresIn: 60 * 60});
    res.json({
        token,
        user:{
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}

