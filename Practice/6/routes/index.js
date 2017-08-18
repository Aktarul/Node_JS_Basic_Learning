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

router.get('/test/:id', function(req, res, next){
	res.render('test',{output: req.params.id});
});

router.post('/test/submit', function(req, res, next) {
	var id = req.body.id;
	if(id == 'details') res.redirect('/users/detail/');
	else if(id == 'login') res.redirect('/login/');
	else res.redirect('/test/'+ id);
});


module.exports = router;
