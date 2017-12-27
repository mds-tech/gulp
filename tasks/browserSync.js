var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    argv        = require('yargs').argv,
    path        = global.config.paths;

var url = argv.url || global.config.url;

gulp.task('browserSync', ['build'], function() {
  browserSync.init(
    [
      path.dist.root+'**/*.{php,html,css,js,svg,png,jpg,jpeg}',
      path.views+'**/*.{html,php}'
    ],
    {
      proxy: url
    }
  );
});
