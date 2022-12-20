const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adhaar: {
    type: Number,
    required: true,
    min: 100000000000,
    max: 999999999999,
  },
  pancard: {
    type: String,
    required: true,
    min: 1000000000,
    max: 9999999999,
  },
  passport: {
    type: String,
    required: true,
    min: 100000000000,
    max: 999999999999,
  },
  email:{
    type:String,
    trim:true,
    lowercase:true,
    unique:true,
  },
  mobile: {
    type: Number,
    required: true,
    min: 1000000000,
    max: 9999999999,
  },
  dob: {
    type: Date,
    required: true,
    min: '1980-01-01',
    max: '2002-12-31',
  },

});
