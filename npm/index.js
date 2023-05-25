//import express module
const express = require('express');
const app = express();

//Binds and listens for connections on the specified host and port
var server = app.listen(8081, function() {


})

app.get('/', function(request, response){
    response.send("Hello World");
});


app.get('/index', function(request, response){
    response.send("Hello Index");
});

/*
app.post('/users', function (request, response) {
    
})

app.delete('/users/:6', function (request, response) {
    var id = request.params.id;
    response.send("Delete User");
})
*/