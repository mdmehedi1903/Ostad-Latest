const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  email: {type: String,required: true},
  otp: {type: String,required: true},
  status: {type: Number,default: 0}
},{timestamps:false, versionKey:false});

let OTPModel = mongoose.model("OTP", OTPSchema);
module.exports = OTPModel;