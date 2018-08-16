var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');
var csrf = require('csurf');

var csrfProtection = csrf();
//protection - all routes are protected by csrf protection
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function (err, docs) {
        res.render('shop/index', { title: 'Shop here!', products: docs });
    });
});

router.get('/user/signup', function (req, res, next) {
    res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', function (req, res, next) {
    res.redirect('/');
})

module.exports = router;