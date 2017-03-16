// Require modules
var express = require('express');

// Set variables
var port = process.env.PORT;
var app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

// App code
app.listen(port, function (err) {
    console.log(`Running server on port ${port}`);
});

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (request, response) {
    response.send('Hello World');
});
app.get('/books', function (request, response) {
    response.send('Hello Books');
});
