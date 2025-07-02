const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    firstName: {type: String},
    lastName: {type: String},
    mobile: {type: String},
    password: {type: String}
}, {versionKey: false, timestamps: false})


const UserModel = mongoose.model("user", DataSchema)
module.exports = UserModel;