// Require modules
var express = require('express');

// Set variables
var port = process.env.PORT;
var app = express();

var books = [
    {
        title: 'You Don\'t Know JavaScript',
        genre: 'Technical',
        author: 'Kyle Simpson',
        read: true
    },
    {
        title: 'JavaScript - The Good Parts',
        genre: 'Technical',
        author: 'Douglas Crockford',
        read: false
    },
    {
        title: 'The Sovereignty of God',
        genre: 'Theology',
        author: 'A.W. Pink',
        read: true
    },
    {
        title: 'The Five Points of Calvinism',
        genre: 'Theology',
        author: 'Lorainne Boettner',
        read: true
    }
];

var bookRouter = express.Router();

app.set('views', './src/views');
app.set('view engine', 'ejs');

// App code
app.listen(port, function (err) {
    console.log(`Running server on port ${port}`);
});

app.use(express.static('public'));
app.use(express.static('src/views'));

app.use('/Books', bookRouter);

app.get('/', function (request, response) {
    response.render('index', {
        title: 'Hello from Render',
        nav: [
            {
                Link: '/Books',
                Text: 'Books'
            },
            {
                Link: '/Authors',
                Text: 'Authors'
            }
        ]
    });
});

bookRouter.route('/')
    .get(function (request, response) {
        response.render('books', {
            title: 'Hello from Render',
            nav: [
                {
                    Link: '/Books',
                    Text: 'Books'
                },
                {
                    Link: '/Authors',
                    Text: 'Authors'
                }
            ],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (request, response) {
        response.send('Hello single book');
    });
