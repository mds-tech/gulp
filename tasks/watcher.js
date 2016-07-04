var gulp = require('gulp'),
    path = global.config.paths;

gulp.task('watch', ['watcher']); // Gets overwritten by Elixir
gulp.task('watcher', ['browserSync'], function() {
  gulp.watch(path.src.js+'**/*', ['custom-scripts']);
  gulp.watch(path.src.js+'**/vendor.json', ['vendor-scripts']);
  gulp.watch(path.bower+'**/*', ['vendor-scripts']);
  gulp.watch(path.src.sass+'**/*.scss', ['_sass']);
  gulp.watch(path.src.images+'icons/**/*.svg', ['iconsList']);
  gulp.watch(path.src.images+'icons/**/*.json', ['iconsSass']);
  gulp.watch(path.src.images+'**/*.svg', ['imagesConvert']);
  gulp.watch(path.src.images+'**/*', ['imagesCompress']);
  gulp.watch(
    [(path.dist.angular + "**/*"), "!"+path.dist.angular+"vendor/**/*"],
    { awaitWriteFinish: true, debounceDelay: 2000 },
    ['_angular']);
});
