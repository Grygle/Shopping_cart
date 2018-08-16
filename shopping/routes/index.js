var express = require('express');
var router = express.Router();
var Product = require('../models/product.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function (err, docs) {
        var productChunks = [];//hehehehehhehehehehhehehehehhehehehehhehehehehhehehehehheheheheh
        var chunkSize = 3;//hehehehehhehehehehhehehehehhehehehehhehehehehhehehehehheheheheh
        for(var i=0; i<docs.length; i += chunkSize){
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'Shop here!', products: productChunks });
    });
});

module.exports = router;