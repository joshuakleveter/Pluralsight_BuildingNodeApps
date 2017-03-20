// Set variables
var port = process.env.PORT;
var nav = [
    {
        Link: '/Books',
        Text: 'Books'
    },
    {
        Link: '/Authors',
        Text: 'Authors'
    }
];

// Require modules
var bookRouter = require('./src/routes/bookRoutes')(nav);
var express    = require('express');
var sql        = require('mssql');

// Config

var config = {
    user: 'books',
    password: 'BookUser1',
    server: 'localhost',
    database: 'books'
};

// App code
var app  = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.listen(port, function (err) {
    console.log(`Running server on port ${port}`);
});

app.use(express.static('public'));
app.use(express.static('src/views'));

app.use('/Books', bookRouter);

app.get('/', function (request, response) {
    response.render('index', {
        title: 'Hello from Render',
        nav: nav
    });
});
