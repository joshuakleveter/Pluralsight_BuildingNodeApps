// Import Modules
var express = require('express');

// Set variables
var bookRouter = express.Router();

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

// Export Router
module.exports = bookRouter;
