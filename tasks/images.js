var gulp         = require('gulp'),
    svg2png      = require('gulp-svg2png'),
    changed      = require('gulp-changed'),
    imagemin     = require('gulp-imagemin'),
    handleErrors = require('../util/handleErrors'),
    path         = global.config.paths;

gulp.task('images', ['imagesCompress', 'imagesConvert']);

gulp.task('imagesConvert', function () {
  return gulp.src(path.src.images + '**/*.svg')
    .pipe(changed(path.dist.images))
    .pipe(svg2png()).on('error', handleErrors)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
      })
      .on('error', handleErrors)
    )
    .pipe(gulp.dest(path.dist.images));
});

gulp.task('imagesCompress', function () {
  return gulp.src(path.src.images + '**/*')
    .pipe(changed(path.dist.images))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
      })
      .on('error', handleErrors)
    )
    .pipe(gulp.dest(path.dist.images))
});
