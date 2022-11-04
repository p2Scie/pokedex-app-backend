const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const database = require('./database');

/****** ROUTES ******/
const { index, add } = require('./controllers');

app.get('/', index);
app.post('/add', add);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
