var gulp = require('gulp'),
    path = global.config.paths;

gulp.task('watcher', ['browserSync'], function() {
  gulp.watch(path.src.js+'**/*', ['scripts']);
  gulp.watch(path.bower+'**/*', ['vendor-scripts']);
  gulp.watch(path.src.sass+'**/*.scss', ['sass']);
  gulp.watch(path.src.images+'**/*.svg', ['imagesConvert']);
  gulp.watch(path.src.images+'**/*', ['imagesCompress']);
});
