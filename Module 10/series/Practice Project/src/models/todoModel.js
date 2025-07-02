const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
    {
        UserName: {type:String},
        TodoSubject: {type:String},
        TodoDescription: {type:String},
        TodoStatus: {type:String},
        TodoUpdateDate: {type:Date},
        TodoCreateDate: {type:Date}
    },

    {versionKey:false, timestamps: false}
)


const TodoModel = mongoose.model("todo", TodoSchema);
module.exports = TodoModel;