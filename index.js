const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((json) => res.send(json))
    .catch((err) => res.status(500, { message: 'Request Failed' }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
