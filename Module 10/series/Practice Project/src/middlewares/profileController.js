const { hashPassword, comparePassword } = require("../helpers/password");
const ProfileModel = require("../models/profileModel");

exports.CreateUser = async (req,res)=> {
    try{
        let plainPassword = req.body['Password'];
        let Password = await hashPassword(plainPassword);
        let reqBody = req.body;
        reqBody['Password'] = Password;
        await ProfileModel.create(reqBody);
        

        res.status(201).json({status: "User Successfully Created!"})
    }catch(err){
        res.status(401).json({status: "Failed!", data: err})
    }
}


exports.LoginUser = async(req,res)=> {
    try{
    let UserName = req.body['UserName'];
    let plainPassword = req.body['Password'];
    
    let data = await ProfileModel.find({UserName: UserName})
    let Password = data[0].Password;

    let passVerify = await comparePassword(plainPassword, Password)
        if(passVerify){
            res.status(201).json({status: "Login Success!"})
        }else{
            res.status(401).json({status: "Wrong Password!"})
        }
    }catch(err){
        res.status(401).json({status: "Failed!", data: err})
    }
}