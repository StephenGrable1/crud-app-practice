var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var dbController = require('./dbcontroller');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', dbController.initializeDatabase, function(req, res) {
    console.log('hit')
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/index.js', function(req, res) {
    console.log('hit')
    res.sendFile(path.join(__dirname + '/index.js'));
})

app.post('/add-todo', dbController.addTodo)

app.listen(3005, () => console.log('listening on port 3005'))