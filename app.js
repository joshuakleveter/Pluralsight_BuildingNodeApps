// Require modules
var express = require('express');

// Set variables
var port = 5000;
var app = express();

// App code
app.listen(port, function (err) {
    console.log(`Running server on port ${port}`);
});

app.get('/', function (request, response) {
    response.send('Hello World');
});
