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

    Pokemon.create({ name: name, weight: weight, height: height }, (err, result) => {
        if (err) res.status(500).json({err, message: "unable to create"})
        return res.status(201).json(result)
    })
    //   .then((pokemon) => res.json(pokemon))
    //   .catch((err) => res.json(err));
}

module.exports = {
  index,
  add
};
