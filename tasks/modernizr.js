var gulp         = require('gulp'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    modulizr     = require('gulp-modulizr'),
    path         = global.config.paths;

gulp.task('modernizr', function() {
  return gulp.src(path.bower+'modernizr/modernizr.js')
    .pipe(modulizr(global.config.modulizr))
    .pipe(concat('modernizr.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.js));
});
