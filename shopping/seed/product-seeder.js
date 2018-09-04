var Product = require('../models/product.js');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

/*
    =======================
        DELETE DATABASE
    =======================
while in seed folder:
node product-seeder.js
 */


//     mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true }, function(){
//     mongoose.connection.db.dropDatabase();
// });

var products = [
    new Product({
        imagePath: 'https://images.pexels.com/photos/573238/pexels-photo-573238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Umbrella with lights',
        description: 'Do you want to shine in the night. This is a perfect umbrella for you.',
        price: 20
    }),
    new Product({
        imagePath: 'https://images.pexels.com/photos/450060/pexels-photo-450060.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Chinese umbrella',
        description: 'Umbrella in style of orient.',
        price: 8
    }),
    new Product({
        imagePath: 'https://images.pexels.com/photos/117/city-sunny-people-sun.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Green umbrella',
        description: 'Umbrella in green colour.',
        price: 13
    }),
    new Product({
        imagePath: 'https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Natural umbrella',
        description: 'This is the best if you are vegan, gluten free hipsta.',
        price: 40
    }),
    new Product({
        imagePath: 'https://images.pexels.com/photos/459882/pexels-photo-459882.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Vintage umbrella',
        description: 'Stylish vintage umbrella.',
        price: 15
    }),
    new Product({
        imagePath: 'https://images.pexels.com/photos/1207926/pexels-photo-1207926.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Rainy umbrella',
        description: 'This umbrella protects you from the rain for sure.',
        price: 21
    }),
    new Product({
        imagePath: 'https://images.pexels.com/photos/940034/pexels-photo-940034.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Clear umbrella',
        description: 'Want to show off with our outfit? Pick this one so as everyone can see your new coat.',
        price: 11
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