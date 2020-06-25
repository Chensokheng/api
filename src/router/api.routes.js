const express = require('express');
const { route } = require('../express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    name: 'Daily web coding',
    sub: 100000,
  });
});

module.exports = router;
