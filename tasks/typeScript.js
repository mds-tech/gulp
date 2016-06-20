var gulp = require('gulp'),
  changed = require('gulp-changed'),
  path = global.config.paths,
  angularDist = path.dist.angular,
  dest = 'public/';

gulp.task('_angular', ['copyAngularFiles']);
gulp.task('copyAngularFiles', function () {
  gulp
    .src([(angularDist + "**/*"), "!"+angularDist+"vendor/**/*"])
    .pipe(changed(dest))
    .pipe(gulp.dest(dest));
});
