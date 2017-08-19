var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', newFeature: 'Form Validation', newFeature2: 'Some more validation', 
  	success: req.session.success, success2: req.session.success2, errors: req.session.errors, errors2: req.session.errors2});
  req.session.errors = null;
  req.session.errors2 = null;
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

router.post('/submit', function(req, res, next){
	req.check('email', 'Invalid email address').isEmail();
	req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

	var errors = req.validationErrors();
	if(errors){
		req.session.errors = errors;
		req.session.success = false;
	}else {
		req.session.success = true;
	}
	res.redirect('/');
});

router.post('/submit2', function(req, res, next){
	req.check('currency', 'Invalid currency').isCurrency({symbol: '$',allow_space_after_symbol: false, 
		symbol_after_digits: false, allow_negatives: true, negative_sign_before_digits: false});
	req.check('letter','Invalid Alphanumeric Letters').isAlphanumeric();
	req.check('number', 'Invalid Number').isNumeric();

	var errors2 = req.validationErrors();
	if(errors2){
		req.session.errors2 = errors2;
		req.session.success2 = false;
	}else {
		req.session.success2 = true;
	}
	res.redirect('/');
});

module.exports = router;
