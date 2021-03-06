// Require Modules
var gulp    = require('gulp');
var inject  = require('gulp-inject');
var jscs    = require('gulp-jscs');
var jshint  = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
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
        ignorePath: '../../public/',
        fileTypes: {
            ejs: {
                block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                detect: {
                    js: /<script.*src=['"]([^'"]+)/gi,
                    css: /<link.*href=['"]([^'"]+)/gi
                },
                replace: {
                    js: '<script src="\/{{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="\/{{filePath}}" />'
                }
            }
        }
    };

    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(wiredepOpts))
        .pipe(inject(injectSrc, injectOpts))
        .pipe(gulp.dest('./src/views/'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('restarting nodemon');
        });
});

gulp.task('style', function () {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});
