const mongoose = require('mongoose')


const DataSchema = mongoose.Schema(
    {
        FirstName: {type:String},
        LastName: {type:String},
        EmailAddress: {type:String,unique: true},
        MobileNumber: {type:String},
        City: {type:String},
        UserName: {type:String, unique: true},
        Password: {type:String}
    },

    {versionKey:false, timestamps: false}
)


const ProfileModel = mongoose.model("profile", DataSchema);
module.exports = ProfileModel;