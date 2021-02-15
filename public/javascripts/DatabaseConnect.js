
var DBObject = require('../Models/CDBM');
const mongoose= require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var CommentCollection =db.collection("Comments");


async function savingDocument(req){
    db.on;
    
    var newDBobject = new DBObject(
        {
            content: req.body.text,
            author: req.body.author,
            ID:req.body.iD,
            date:req.body.date
        });
    CommentCollection.insertOne(newDBobject, function(err, res){
        if(err) throw err;
        console.log('1 document inserted!');
        db.off;
    });
}

exports.saveComment = async function(req,res,next) {
    console.log(req.body);
    await savingDocument(req);

}


exports.deleteComment= async function(req,res,next){
    db.on;
    console.log(req.body.ID+" id here")
    CommentCollection.deleteOne({
        "ID": req.body.ID
    })
}

async function query(valut){
    db.on;
    const result = await CommentCollection.find({}).toArray();
    return result;
}

async function middleman(){
    var value=await query();
    
    return value;
}

//async has been taken care of. Note taht the new code hassen\t bee 
//n tested
exports.getComments = async function(req,res,next){
   var result= await middleman();
   console.log(result);
   res.send(JSON.stringify(result));
   
    
}

  