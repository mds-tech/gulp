var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    argv        = require('yargs').argv,
    path        = global.config.paths;

var url = argv.url || global.config.url;

gulp.task('browserSync', ['build'], function() {
  browserSync.init(
    [path.dist.root+'**', path.views+'**'],
    {
      proxy: url
    }
  );
});
