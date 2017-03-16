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
        response.render('bookListView', {
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

bookRouter.route('/:id')
    .get(function (request, response) {
        var id = request.params.id;
        response.render('bookView', {
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
            book: books[id]
        });
    });

// Export Router
module.exports = bookRouter;
