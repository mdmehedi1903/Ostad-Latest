const { hashPassword, comparePassword } = require("../helpers/password");
const SendEmailUtility = require("../helpers/sendEmail");
const OTPModel = require("../models/OTPModel");
const StudentsModel = require("../models/StudentModels");
const jwt = require('jsonwebtoken');

exports.CreateStudent = async(req,res)=> {
    try{
        let {password} = req.body;
        let newPassword = await hashPassword(password)
        let reqBody = req.body;
        reqBody.password = newPassword;
        let result = await StudentsModel.create(reqBody);
        res.status(201).json({status:"Student Created!", result})
    }catch(e){
        res.status(401).json({status: "Failed", data:e})
    }
}


exports.LoginStudent = async (req, res) => {
  try {
    let { email, password } = req.body;
    let result = await StudentsModel.findOne({ email });

    if (!result) {
      return res.status(401).json({ status: "User not found!" });
    }

    let verify = await comparePassword(password, result.password);

    if (verify) {
        let Payload={
            exp:Math.floor(Date.now()/1000)+(24*60*60),
            data: {
                _id: result._id,
                email: result.email
            }
        }
        let Token = jwt.sign(Payload, "secret-123-xyz")
      return res.status(200).json({ status: "Login Success!", Token }); 
    } else {
      return res.status(401).json({ status: "User not found!" });
    }

  } catch (e) {
    return res.status(500).json({ status: "Failed by Login", error: e.message });
  }
};



exports.ReadProfile = async(req,res)=> {
    try{
        let {email} = req.headers['TokenData']
        let projection = "email firstName lastName mobile address";
        let result = await StudentsModel.findOne({email}).select(projection);
        res.status(200).json({status: "Read Success!", result})
    }catch (e) {
        return res.status(500).json({ status: "Failed by Login", error: e.message });
    }
}


exports.SendOTP = async(req,res)=> {
    try{
        let email = req.params.email;
        let otp = Math.floor(Math.random()*9000+1000)
        let result = await StudentsModel.findOne({email});
        let OTPObject = {
            email,
            otp
        }
        if(result){
            let result = await OTPModel.create(OTPObject)
            await SendEmailUtility(email, `Verification code is ${otp}`, `Verification Code!`)
            return res.status(200).json({status: `Verification code has been sent!, code is ${otp}`, result});
        }else{
            return res.status(401).json({ status: "User not found!" });
        }
    }
    catch (e) {
        return res.status(500).json({ status: "Failed by Login", error: e.message });
    }
}



exports.VerifyEmail = async(req,res)=> {
    try{
        let otp = req.params.otp;
        let email = req.params.email;
        let result = await OTPModel.updateOne({otp, email, status: "0"}, {status: "1"})
        if(result.modifiedCount === 1){
            return res.status(200).json({status: `Email Verified!`, otp,email, result})
        }else{
            return res.status(500).json({ status: "Invalid OTP"});
        }
    }catch (e) {
        return res.status(500).json({ status: "Failed by Login", error: e.message });
    }
}

exports.ResetPassword = async(req,res)=> {
    let {otp,email,password} = req.params;
    password = await hashPassword(password)
    try{
        let result = await OTPModel.find({email, otp, status:"1"}).countDocuments();
        if(result===1){
            let result = await StudentsModel.updateOne({email}, {password})
            res.status(201).json({status: `Password Reset Done`, result})
        }else{
            res.status(401).json({status: "Invalid OTP!"}) 
        }
    }catch (e) {
        return res.status(500).json({ status: "Failed by Login", error: e.message });
    }
}