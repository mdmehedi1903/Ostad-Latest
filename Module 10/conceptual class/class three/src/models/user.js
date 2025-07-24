const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = Schema(
  {
    name: { type: String },
    username: { type: String }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

const userModel = mongoose.model("user", DataSchema);
module.exports = userModel;
