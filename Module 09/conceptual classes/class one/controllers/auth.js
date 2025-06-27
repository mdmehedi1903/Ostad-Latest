const { comparePassword, hashPassword } = require('../helpers/password');
var jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        let {name, email, password, address} = req.body
        password = await hashPassword(password)

        const reqBody = {
            name, email, password, address
        }

        const savedUser = await User.create(reqBody);

        let token = jwt.sign({_id: savedUser.id}, process.env.SECRET_KEY)

        res.status(201).json({
            message: "User created successfully",
            savedUser,
            token
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user",
            error: error.message,
        });
    }
};


exports.login = async (req,res)=> {
    let {email, password} = req.body;
    const result = await User.find(
        {email}
    )
    const passVerify = await comparePassword(password, result[0].password)

    if(passVerify){
        res.status(200).json({
            Login: "Success"
        })
    }else{
        res.status(200).json({
            Login: "Failed!"
        })
    }
}
