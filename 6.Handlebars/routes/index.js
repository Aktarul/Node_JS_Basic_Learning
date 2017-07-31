var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',condition: true,
      anyArray: ['Robert Downey Jr.','Will Smith','John Cena','Tom Cruise'] });
});

module.exports = router;
