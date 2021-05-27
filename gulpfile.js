let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('styles/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task("sass:watch", function() {
    gulp.watch([
        "./styles/**/*.scss",
    ], gulp.series('sass'));
});

gulp.task('default', gulp.parallel(
    'sass'
));

