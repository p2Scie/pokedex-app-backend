const mongoose = require('mongoose');
const { Schema } = mongoose;

const pokemonSchema = new Schema({
  name: String,
  weight: Number,
  height: Number
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = { Pokemon };
