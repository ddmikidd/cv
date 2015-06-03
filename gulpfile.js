var gulp = require('gulp');

var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');

gulp.task('compass', function(){
    gulp.src('sass/style.scss').pipe(compass({
        config_file: 'config.rb',
        css: 'stylesheets/',
        sass: 'sass/'
    }));
});

gulp.task('cssmin', function () {
    gulp.src('stylesheets/style.css')
        .pipe(concatCss('style.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('cssmin'));
});


gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', function(event) {
        gulp.run('compass');
    });
    gulp.watch('stylesheets/**/*.css', function(event) {
        gulp.run('cssmin');
    });
});

gulp.task('default', ['watch']);

