const {MongoClient, ObjectID} = require('mongodb'); // ES6 de-structuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');


// Fetch documents filtered with a property
// db.collection('Todos').find({completed: true}).toArray().then( (docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
//   console.log('Unable to fetch todos ', err);
// });

// Fetch documents filtered with _id
// db.collection('Todos').find({
//   _id: new ObjectID('5b054edcd8b204386402cdce')
// }).toArray().then( (docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) =>{
//   console.log('Unable to fetch todos ', err);
// });

// Count documents
db.collection('Todos').find().count().then( (count)=>{
  console.log(`Todos count: ${count}`);
}, (err) =>{
  console.log('Unable to fetch todos ', err);
});

// Fetch all users named Diana
db.collection('Users').find({name: 'Diana'}).toArray().then( (docs) =>{
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch users: ', err);
})

//db.close();
});
