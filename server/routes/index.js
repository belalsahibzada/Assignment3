let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* GET home page. */

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});





module.exports = router;
