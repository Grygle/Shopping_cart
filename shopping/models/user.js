var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String, equired: true},
    password: {type: String, equired: true},
});

module.exports = mongoose.model('User', userSchema);