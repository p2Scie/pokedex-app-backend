//Connect to MongoDB
const mongoose = require('mongoose');

const url = process.env.DB_CONNECTION;

try {
  mongoose.connect(`${url}`);
} catch (error) {
  console.log(error);
}