// These lines tell Gulp which plugins are requited 
// to complete the defined tasks.
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');

//var sourcemaps = require('gulp-sourcemaps');
gulp.task('js', function () {
    gulp.src([
            'js/windowsPh.js',
            'js/logo.js',
            'js/general.js',
            'js/date.js',
            'js/slider.js'
         ])
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('jsmin'));
});

gulp.task('compass', function(){
    gulp.src('sass/style.scss')
        .pipe(compass({
        config_file: 'config.rb',
        css: 'stylesheets/',
        sass: 'sass/',
        require: 'breakpoint'  
    }));
});

gulp.task('cssmin', function () {
    gulp.src('stylesheets/style.css')
        .pipe(concatCss('style.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('cssmin'));
});


gulp.task('watch', function(){
    gulp.watch('js/*', function () {
         gulp.run('js');
    });
    gulp.watch('sass/**/*.scss', function(event) {
        gulp.run('compass');
    });
    gulp.watch('stylesheets/**/*.css', function(event) {
        gulp.run('cssmin');
    });
});

gulp.task('default', ['watch']);
