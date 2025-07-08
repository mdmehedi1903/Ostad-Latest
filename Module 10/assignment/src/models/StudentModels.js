const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  roll: { type: String, required: true },
  class: { type: String, required: true }
}, {
  timestamps: true, versionKey: false
});

const StudentsModel = mongoose.model('Student', StudentsSchema);

module.exports = StudentsModel;
