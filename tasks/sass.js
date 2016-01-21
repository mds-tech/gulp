var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    rename         = require('gulp-rename'),
    minifycss      = require('gulp-cssnano'),
    sourcemaps     = require('gulp-sourcemaps'),
    prefix         = require('gulp-autoprefixer'),
    handleErrors   = require('../util/handleErrors'),
    argv           = require('yargs').argv,
    path           = global.config.paths;

var production = argv.production;

gulp.task('sass', ['_sass']); // Gets overwritten by Elixir
gulp.task('_sass', function () {
  var stream = gulp.src(path.src.sass+'**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', handleErrors))
    .pipe(prefix(global.config.autoprefixer))
    .pipe(rename({suffix: '.min'}));

  if (production) {
    stream.pipe(purge()).pipe(minifycss());
  } else {
    stream.pipe(sourcemaps.write('maps/'));
  }

  return stream.pipe(gulp.dest(path.dist.css));
});
