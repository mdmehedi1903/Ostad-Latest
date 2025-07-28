const mongoose = require("mongoose"); 
const WorksSchema = new mongoose.Schema({ 
    title: String, 
    classNote: String, 
    description: String, 
    status: String, 
    email: String 
}, { versionKey: false, timestamps: true }); 
const WorkModel = mongoose.model("Work", WorksSchema);
module.exports = WorkModel;
