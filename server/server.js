var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();
app.use(bodyParser.json()); // This is middelware used to transform the data in the post to json to be sent to the server

// CRUD = Create Read Update Delete
// Creating a new todo
app.post('/todos', (req, res)=>{
  //console.log(req.body);
  //console.log(req.body.text);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
     res.send(doc);
    //console.log(JSON.stringify(doc, undefined, 2));
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.listen(3000, ()=>{
  console.log('Started up on 3000');
})
// var newTodo = new Todo({
//   text: ' Edit this video  '
// });
// newTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// },
// (e) =>{
//   console.log('Unable to save ', e);
// });

// var newUser = new User({
//   email:'diana.sormani@gmail.com'
// });
// newUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log('Unable to save user ', e);
// });
