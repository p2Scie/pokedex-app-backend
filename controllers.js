const express = require('express');
const { Pokemon } = require('./pokemonModel');

const index = (req, res) => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((json) => res.send(json))
    .catch((err) => res.status(500, { message: 'Request Failed' }));
};

const show = (req, res) => {
  const { id } = req.body;

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((json) => res.send(json))
    .catch((err) => res.status(500, { message: 'Request Failed' }));
};

const add = async (req, res) => {
  const { name, weight, height } = req.body;

  const pokemon = await Pokemon.findOne({ name: name });
  if (pokemon) res.status(500).send({ message: 'this pokemon already exists' });

  Pokemon.create({ name, weight, height, comment: '' })
    .then((pokemon) => res.send(pokemon))
    .catch((err) => res.status(500, { message: 'Request Failed' }));
};

const edit = (req, res) => {
  const { id, name, weight, height, comment } = req.body;

  const data = { name, weight, height, comment };

  Pokemon.findByIdAndUpdate(id, data, (err, pokemon) => {
    if (err) {
      res.status(500, { message: 'Une erreur est survenu' });
      throw err;
    }

    res
      .status(200, {
        message: 'Les information ont bien été mis à jour !',
      })
      .send(pokemon);
  });
};

const remove = (req, res) => {
  const { id } = req.body;

  Pokemon.findByIdAndDelete(id, (err, pokemon) => {
    if (err) res.status(500).json({ err, message: 'Unable to delete user' });
    if (pokemon === null)
      res.status(404).json({ message: 'pokemon not found' });
    else res.status(200).json({ message: 'pokemon deleted', pokemon });
  });
};

const favorites = async (req, res) => {
  const items = await Pokemon.find();
  res.status(201).send(items);
};

module.exports = {
  index,
  add,
  favorites,
  edit,
  remove,
  show,
};
