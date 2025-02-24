var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi Amresh, Welcome to a new start')
});

module.exports = router;
