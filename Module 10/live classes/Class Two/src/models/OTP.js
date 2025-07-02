const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    Email: {type: String},
    OTP: {type: String},
    Status: {type: Number, default: 0}
}, {versionKey: false, timestamps: true})


const OTPModel = mongoose.model("otp", DataSchema)
module.exports = OTPModel;