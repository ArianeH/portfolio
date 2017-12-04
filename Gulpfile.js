var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(watch('sass/**/*.scss',['styles']))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
