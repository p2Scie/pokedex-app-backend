const express = require('express');
const app = express();
const port = 3000;

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
