import User from "../models/user";

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
    try {
        
    } catch (error) {
        
    }
}

