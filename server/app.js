const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/contacts', (req, res, next) => {
  res.json([
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Joe' }
  ]);
})

module.exports = app;
