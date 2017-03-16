// Require Modules
var gulp    = require('gulp');
var inject  = require('gulp-inject');
var jscs    = require('gulp-jscs');
var jshint  = require('gulp-jshint');
var wiredep = require('wiredep').stream;

// Set Variables
var jsFiles = ['*.js', 'src/**/*.js'];

// Gulp Tasks
gulp.task('inject', function () {
    var injectOpts = {
        ignorePath: '/public/'
    };
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'],
                             {read: false});
    var wiredepOpts = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public/'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(wiredepOpts))
        .pipe(inject(injectSrc, injectOpts))
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
