//Connect to MongoDB
const mongoose = require('mongoose');

try {
  mongoose.connect('mongodb+srv://p2Scie:HAlRdBVInZvCprDf@cluster0.d4jz6ni.mongodb.net/?retryWrites=true&w=majority');
} catch (error) {
  console.log(error);
}