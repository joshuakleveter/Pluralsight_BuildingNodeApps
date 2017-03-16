// Require Modules
var gulp   = require('gulp');
var jscs   = require('gulp-jscs');
var jshint = require('gulp-jshint');
var wiredep = require('wiredep').stream;

// Set Variables
var jsFiles = ['*.js', 'src/**/*.js'];

// Gulp Tasks
gulp.task('inject', function () {
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public/'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views/'));
});

gulp.task('style', function () {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});
