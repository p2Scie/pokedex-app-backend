const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

const cors = require('cors');
var corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const database = require('./database');

/****** ROUTES ******/
const { index, add, favorites, edit, remove, show } = require('./controllers');

app.get('/', index);
app.post('/add', add);
app.get('/favorites', favorites);
app.put('/edit', edit);
app.delete('/delete', remove);
app.get('/show', show);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
