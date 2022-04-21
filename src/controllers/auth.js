import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Email exist, Please use other email"
            })
        }
        const user = await new User({ name, email, password }).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Can not create account"
        })
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    if (!user) {
        return res.status(400).json({
            message: "User does not exist"
        })
    };
    if (!user.authenticate(password)) {
        return res.status(400).json({
            message: "Wrong password"
        })
    }
    const token = jwt.sign({ _id: user._id }, "dungnv", { expiresIn: 60 * 60 });
    return res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
        }
    })
}

