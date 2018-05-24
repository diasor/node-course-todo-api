const {MongoClient, ObjectID} = require('mongodb'); // ES6 de-structuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

//deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then( (result) =>{
//   console.log(result);
//   });
// db.collection('Users').deleteMany({name: 'Diana'}).then( (result)=> {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then( ()=>{
//   console.log(result);
// })

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then( (result)=> {
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({_id: new ObjectID('5b055416386828097c96e91f')}).then( (result)=>{
  console.log(result);
});

//db.close();
});
