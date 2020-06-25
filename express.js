const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    name: 'Daily Web Coding',
    sub: 100000,
  });
});

module.exports = app;
