const { HashPass, ComparePass } = require("../helper/password");
const SendEmailUtility = require("../helper/sendEmail");
const OTPModel = require("../models/OTP");
const UserModel = require("../models/UserModel");
const jwt = require('jsonwebtoken')

exports.RegisterUser = async (req,res)=> { 
    try{
        let plainPassword = req.body['password'];
        let password = await HashPass(plainPassword); 
        let reqBody = req.body;
        reqBody['password'] = password;
        let Result = await UserModel.create(reqBody);

        res.status(200).json({Status: "Success!", Result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}

exports.LoginUser = async(req,res)=> {


    try{
        let {email, password} = req.body;
        let User = await UserModel.countDocuments({email})
        console.log(User)
        
        if(User===1){
            User = await UserModel.find({email}) 
            let  passVerify = await ComparePass(password, User[0].password);
            if(passVerify){

                let Payload={
                    exp:Math.floor(Date.now()/1000)+(24*60*60),
                    data: User
                }

                let Token = jwt.sign(Payload, "Secret-XYZ-123")
                res.status(201).json({status: "Login Success!", Token})
            }else{
                res.status(401).json({status: "Incorrect username or password."})
            }
        }else{
            res.status(401).json({status: "Incorrect username or password."})
        }

    }catch(err){
        res.status(401).json({status: "Failed!", data: err})
    }

}



exports.ReadUser = async (req,res)=> {
    try{
        let {_id} = req.headers['TokenData']
        let Projection = "email firstName lastName mobile";
        let Profile = await UserModel.find({_id: _id}, Projection)
            if(Profile.length==0){
                res.status(401).json({status: "User No Longer Exists!"}) 
            }else{
                
                res.status(201).json({status: "Success to Read Profile!", Profile})
            }
    }catch(err){
       res.status(401).json({status: "Failed!", data: err}) 
    }
}



exports.UpdateUser = async (req,res)=> {
    try{
        let {_id} = req.headers['TokenData']
        let plainPassword = req.body['password'];
        let password = await HashPass(plainPassword);
        let reqBody = req.body;
        reqBody['password'] = password;


        let Result = await UserModel.updateOne({_id: _id}, reqBody)
        res.status(201).json({status: "Success!", Result})
    }catch(err){
       res.status(401).json({status: "Failed!", data: err}) 
    }
}


exports.VerifyEmail = async(req,res)=> {
    let email = req.params.email;
    let OTPCode = Math.floor((Math.random()*900000)+100000)

    let User = await UserModel.countDocuments({email})
    if(User===1){
        await OTPModel.create({Email: email,OTP: OTPCode})
        await SendEmailUtility(email, `Your OTP code is ${OTPCode}`, `Verification Code`)
        res.status(201).json({status: `Verification Code has been sent!, Code: ${OTPCode}`})
    }else{
        res.status(401).json({status: "Failed!", data: err}) 
    }

}

exports.VerifyOTP = async(req,res)=> {
    try{
        let email = req.params.email;
        let otp = req.params.otp;
        let OTPStatus = await OTPModel.find({Email: email, OTP: otp, Status: 0}).countDocuments()
        
            if(OTPStatus===1){
                await OTPModel.updateOne({Email: email, OTP: otp}, {Status: "1"})
                res.status(201).json({status: `OTP Verified`})
            }else{
                res.status(401).json({status: "Invalid OTP!"}) 
            }
        
    }catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }
}



exports.RecoverPassword = async (req,res)=> {
    try{
        let {email, password, otp} = req.body;
        password = await HashPass(password);

        let status = await OTPModel.find({Email: email, OTP: otp, Status: "1"}).countDocuments()
        if(status===1){
            let result = await UserModel.updateOne({email}, {password})
            res.status(201).json({status: `Password Reset Done`})
        }else{
            res.status(401).json({status: "Invalid OTP!"}) 
        }
        
        
        
        
    }catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }
}