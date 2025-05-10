var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('scss/main.scss', gulp.series('sass'));
});

/*
var gulp = require('gulp'),
// csso = require('gulp-csso'),
    sass = require('gulp-sass');

/*
gulp.task('css', function (){
    return gulp.src('./public/css/main.css')
    .pipe(csso())
    .pipe(gulp.dest('./public/css/'))
});*/

/*
gulp.task('sass', function (){
    return gulp.src('scss/main.sass')
    .pipe(sass.sync())
    .pipe(gulp.dest('./public/css/main.css'))
})

gulp.task('sass:watch', function (){
    gulp.watch('./main.sass', gulp.series('sass'))
})
*/