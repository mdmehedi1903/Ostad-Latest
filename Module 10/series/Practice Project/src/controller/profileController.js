let jwt = require('jsonwebtoken')
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
        let {UserName, Password} = req.body;
        let User = await ProfileModel.find({UserName})
        
        if(User.length>0 && User.length==1){
            let  passVerify = await comparePassword(Password, User[0].Password);
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


exports.ReadProfile = async (req,res)=> {
    try{
        let {_id} = req.headers['TokenData']
        let Projection = "UserName FirstName LastName EmailAddress MobileNumber City";
        let Profile = await ProfileModel.find({_id: _id}, Projection)
            if(Profile.length==0){
                res.status(401).json({status: "User No Longer Exists!"}) 
            }else{
                
                res.status(201).json({status: "Success to Read Profile!", Profile})
            }
    }catch(err){
       res.status(401).json({status: "Failed!", data: err}) 
    }
}



exports.UpdateProfile = async (req,res)=> {
    try{
        let {_id} = req.headers['TokenData']
        let plainPassword = req.body['Password'];
        let Password = await hashPassword(plainPassword);
        let reqBody = req.body;
        reqBody['Password'] = Password;


        let Result = await ProfileModel.updateOne({_id: _id}, reqBody)
        res.status(201).json({status: "Success!", Result})
    }catch(err){
       res.status(401).json({status: "Failed!", data: err}) 
    }
}




exports.DeleteUser = async(req,res)=> {
    try{
        let _id = req.headers['TokenData']
        let Result = await ProfileModel.deleteOne({_id: _id});
        res.status(201).json({status: "Success!", Result})
    }catch(err){
        res.status(401).json({status: "Delete Failed!", data: err}) 
    }
}




// Optional, just for learning purpose
exports.PasswordVerify = async(req,res)=> {
    try{
    let UserName = req.body['UserName'];
    let plainPassword = req.body['Password'];
    
    let data = await ProfileModel.find({UserName: UserName})
    let Password = data[0].Password;

    let passVerify = await comparePassword(plainPassword, Password)
        if(passVerify){
            res.status(201).json({status: "Password Verified!"})
        }else{
            res.status(401).json({status: "Wrong Password!"})
        }
    }catch(err){
        res.status(401).json({status: "Failed!", data: err})
    }
}



