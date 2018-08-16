var Product = require('../models/product.js');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

/*
    =======================
        DELETE DATABASE
    =======================
 */
//     mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true }, function(){
//     mongoose.connection.db.dropDatabase();
//});

var products = [
    new Product({
        imagePath: 'https://placeimg.com/100/150/arch',
        title: 'Hotel',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    }),
    new Product({
        imagePath: 'https://placeimg.com/100/250/arch',
        title: 'Hotel2',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    }),
    new Product({
        imagePath: 'https://placeimg.com/100/150/arch',
        title: 'Hotel',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    }),
    new Product({
        imagePath: 'https://placeimg.com/100/150/arch',
        title: 'Hotel',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    }),
    new Product({
        imagePath: 'https://placeimg.com/100/150/arch',
        title: 'Hotel',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    }),
    new Product({
        imagePath: 'https://placeimg.com/100/150/arch',
        title: 'Hotel',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    }),
    new Product({
        imagePath: 'https://placeimg.com/100/150/arch',
        title: 'Hotel',
        description: 'This is the best 4 star hotel in the city.',
        price: 30
    })
];

var done = 0;
for (var i=0; i<products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}