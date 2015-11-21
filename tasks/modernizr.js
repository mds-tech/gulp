var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    modulizr     = require('gulp-modulizr'),
    path         = global.config.paths;

gulp.task('modernizr', function() {
  return gulp.src(path.bower+'modernizr/modernizr.js')
    .pipe(modulizr(global.config.modulizr))
    .pipe(concat('modernizr.js'))
    .pipe(gulp.dest(path.dist.js));
});
