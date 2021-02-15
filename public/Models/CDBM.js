var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    ID: {type:String},
    author: {type:String},
    content: {type:String},
    date:{type:Date}

});

module.exports = mongoose.model('DBObject', CommentSchema);