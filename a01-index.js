var express = require('express');
var things = require('./things');
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');

app.get('/' , function(req,res){
    res.send('hello world');
});

app.get('/:id([0-9]{4})', function(req,res){
    res.send('The id you specified is:' + req.params.id);
});

app.get('/things/:name/:id([0-9]{4})', function(req,res){
    res.send('id:'+ req.params.id + ' ' + 'name:' + req.params.name );
});

app.get('/first_template', function (req,res){
    res.render('first_view')
});

app.get('/dynamic_view', function (req,res){
    res.render('dynamic',{
        name: "AS10",
        url: "http://www.tutorialspoint.com",

    });
});

app.use('/things',things);
app.listen(3000);