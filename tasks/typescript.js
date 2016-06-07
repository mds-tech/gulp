
var gulp        = require('gulp'),
  svg2png       = require('gulp-svg2png'),
  del           = require("del"),
  tsc           = require("gulp-typescript"),
  sourceMaps    = require('gulp-sourcemaps'),
  handleErrors  = require('../util/handleErrors'),
  path          = global.config.paths;

/**
 * Compile TypeScript sources and create source maps in build directory.
 */
gulp.task('typescript', function () {
  var tsProject = tsc.createProject(path.src.typeScript+"tsconfig.json");

  var tsResult = gulp.src(path.src.typeScript+"**/*.ts")
    .pipe(sourceMaps.init())
    .pipe(tsc(tsProject));

  /** Copy over our systemjs.config.js */
  gulp.src('systemjs.config.js')
    .pipe(gulp.dest(path.dist.root, {overwrite: true}));

  /** Copy over our html & css */
  gulp.src(path.src.typeScript+"**/*.{html,css}")
    .pipe(gulp.dest(path.dist.root, {overwrite: true}));

  return tsResult.js
    .pipe(sourceMaps.write("."))
    .pipe(gulp.dest(path.dist.typeScript));
});
