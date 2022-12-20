const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'What is your Name'],
  },
  aadhar: {
    type: Number,
    required: [true, 'What is you Aadhar number'],
    min: 100000000000,
    max: 999999999999,
  },
  pancard: {
    type: String,
    required: [true, 'What is your pan number'],
    min: 1000000000,
    max: 9999999999,
  },
  passport: {
    type: String,
    required: [true, 'What is your passport number'],
    min: 100000000000,
    max: 999999999999,
  },
  email: {
    type: String,
    required: [true, 'What is you email ID'],
    trim: true,
    lowercase: true,
    unique: [true, 'Email must be unique'],
  },
  mobile: {
    type: Number,
    required: [true, 'What is your mobile number'],
    min: 1000000000,
    max: 9999999999,
  },
  dob: {
    type: Date,
    required: [true, 'What is your Date Of Birth'],
    min: '1980-01-01',
    max: '2002-12-31',
  },
  gender: {
    type: String,
    enum: 'male' || 'female',
    required: [true, 'What is your gender'],
  },
  marritalStatus: {
    type: String,
    enum: 'married' || 'unmarried',
  },
  city: {
    type: String,
  },
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
