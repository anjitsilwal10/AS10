var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017//myNewDatabase')
   .then(() =>
   console.log('MongoDB Connected...'))
   .catch(err =>
      console.log(err));

var express = require('express');
var app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine' , 'pug');
app.set('views', './views')

app.get('/person', function(req, res){
    res.render('person');
 }); 


app.post('/person', function(req, res){
   res.send(req.body);
   
 });
app.listen(3000, function(){
   console.log("Server is running...");
});
