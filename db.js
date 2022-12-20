const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connection = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect('mongodb://localhost/my-app', connectionParams);
    console.log('connected to database');
  } catch (error) {
    console.log("Couldn't connect with database", error);
  }
};

module.exports = connection;
