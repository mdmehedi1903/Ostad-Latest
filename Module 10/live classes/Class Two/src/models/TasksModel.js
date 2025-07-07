const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({

    title: {type:String},
    description: {type:String},
    status: {type: String},
    email: {type: String}

}, {timestaps: true, versionKey:false})


const TaskModel = mongoose.model('task', DataSchema);
module.exports = TaskModel;