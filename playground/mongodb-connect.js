//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err,client) => {
	if (err) {
		return console.log('Unable to connect to server');
	}
	console.log('Connected to Mongo server');
	const db = client.db('TodoApp');
	// db.collection('Todos').insertOne({
	// 	text: 'Alguma coisa',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('unable to insert todo');
	// 	}

	db.collection('Users').insertOne({
		name: 'Rodrigo',
		age: 22
	},(err, result) => {
		if(err) {
			return console.log('unable to insert user');
		}
		console.log(result.ops[0]._id.getTimestamp());
	});

	client.close();
});