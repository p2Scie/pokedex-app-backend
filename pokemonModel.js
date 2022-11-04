const mongoose = require('mongoose');
const { Schema } = mongoose;

const pokemonSchema = new Schema({
  name: {type: String, unique: true},
  weight: Number,
  height: Number,
  comment: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = { Pokemon };
