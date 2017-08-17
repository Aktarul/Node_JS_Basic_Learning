var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/detail/', function(req, res, next) {
  res.send('User detail');
});

router.get('/login/', function(req, res, next) {
	res.render('login');
});


module.exports = router;
