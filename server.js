var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var db = null;
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
MongoClient.connect("mongodb://localhost:27017/toDo",function(err,database){
	db = database;
});
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.listen(27015,function(){
	console.log("Server started at 27015 port");
});
///// INSERT DATA
app.post('/handler',function(req,res){
	console.log(req.body);
	res.status(200).end();
	///sendData for DB
	db.collection('Nodes').insert({
		node:req.body.content,
		textStyle:req.body.textStyle
	},function(){
		res.status(200).end()
	}
	);
});
///// SELECTING DATA
app.post('/selectData',function(req,res){
	db.collection('Nodes').find().toArray(function(err,data){
		res.send(data);
	});
});
//////UPDATE DATA
app.post('/updateData',function(req,res){
	db.collection('Nodes').update(
		{_id:ObjectID(req.body.upId)},
		{$set:{
				textStyle:req.body.textStyle
			}
		}
	),
	res.status(200).end();
});
app.get('*',function(req,res){
	res.sendFile(__dirname + '/index.html');
});