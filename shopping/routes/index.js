var express = require('express');
var router = express.Router();

var Product = require('../models/product.js');



/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function (err, docs) {
        res.render('shop/index', { title: 'Shop here!', products: docs });
    });
});



module.exports = router;