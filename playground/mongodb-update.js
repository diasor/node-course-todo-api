const {MongoClient, ObjectID} = require('mongodb'); // ES6 de-structuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

// findOneAndUpdate
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5b06610b350d081148ec9b19')
}, {
  $set{
    completed:true
  }
}, {
  r
})

//db.close();
});
