const express = require('express');
const { Pokemon } = require('./pokemonModel');

const index = (req, res) => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((json) => res.send(json))
    .catch((err) => res.status(500, { message: 'Request Failed' }));
};

const add = (req, res) => {
    const {name, weight, height} = req.body;

    Pokemon.create({ name, weight, height })
    .then((pokemon) => res.send(pokemon))
    .catch((err) => res.status(500, { message: 'Request Failed' }));
}

const edit = (req, res) => {
    const {id, name, weight, height }= req.body;

    const data = {name: name, weight: weight, height: height};
  
    Pokemon.findByIdAndUpdate(id, data, (err, pokemon) => {
      if (err) {
        res.status(500, { message: 'Une erreur est survenu' });
        throw err;
      }

      res.status(200, {
        message: "Les information ont bien été mis à jour !",
      }).send(pokemon);
    }) 
}

const favorites = async (req, res) => {
    const items = await Pokemon.find();
    res.status(201).send(items);
}

module.exports = {
  index,
  add,
  favorites,
  edit
};
