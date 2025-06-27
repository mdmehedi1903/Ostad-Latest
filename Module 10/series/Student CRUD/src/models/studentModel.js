const mongoose = require('mongoose');


const DataSchema = mongoose.Schema({
    Name: {type: String},
    Roll: {
            type: Number,
            min: [6, `Min 6 & Max 12, But Supplied value is = {VALUE}`],
            max: [12, `Min 6 & Max 12, But Supplied value is = {VALUE}`]
          },
    Class: String,
    Mobile: {
      type: String, 
      validate: {
        validator: function (value) {
          // if (value.length === 11) {
          //   return true;
          // } else {
          //   return false;
          // }
          return /^(?:\+?88|0088)?01[15-9]\d{8}$/.test(value)

        },
        message: "Number should be 11 digits"
      }
    },
    Remarks: {type: String, default: "No Remarks"}
}, 

{
  timestamps: false,
  versionKey: false
});

let StudentModel = mongoose.model("Student", DataSchema)
module.exports = StudentModel;