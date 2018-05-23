//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // ES6 de-structuring

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

// Insert a new document into the Todo collection
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err){
//       return console.log('Unable to insert Todo', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//   db.close();
// });

// Insert a new document into the Users collection
db.collection('Users').insertOne({
  //_id: 123,
  name: 'Diana',
  age: 38,
  location: 'Amstelveen'
}, (err, result) => {
  if (err){
    return console.log('Unable to insert User', err);
  }

  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
});
db.close();
});

// ES6 de-structuring
  var user = {name: 'Diana', age:38};
  var {name} = user;
  console.log(name); // This prints "Diana"
