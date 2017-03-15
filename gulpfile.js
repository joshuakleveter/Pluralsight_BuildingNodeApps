// Require Modules
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

// Set Variables
var jsFiles = ['*.js', 'src/**/*.js'];

// Gulp Tasks
gulp.task('style', function () {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});
