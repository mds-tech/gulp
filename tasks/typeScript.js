var gulp = require('gulp'),
  path = global.config.paths,
  angularDistFolder = path.dist.angular;

gulp.task('_angular', ['copyAngularFiles']);
gulp.task('copyAngularFiles', function () {
  gulp.src([(angularDistFolder + "**/*"), "!"+angularDistFolder+"vendor/**/*"])
    .pipe(gulp.dest('public/'));
});
