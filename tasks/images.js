var gulp = require('gulp'),
  svg2png = require('gulp-svg2png'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  handleErrors = require('../util/handleErrors'),
  path = global.config.paths;

gulp.task('images', ['imagesCompress', 'imagesConvert']);

gulp.task('imagesConvert', function () {
  return gulp.src(path.src.images + '**/*.svg')
    .pipe(changed(path.dist.images))
    .pipe(svg2png()).on('error', handleErrors)
    .pipe(
      imagemin([
        pngquant({speed: 2, quality: 75})
      ])
      .on('error', handleErrors)
    )
    .pipe(gulp.dest(path.dist.images));
});

gulp.task('imagesCompress', function () {
  return gulp.src(path.src.images + '**/*')
    .pipe(changed(path.dist.images))
    .pipe(
      imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        pngquant({speed: 2, quality: 75}),
        imagemin.svgo({
          precision: 0,
          plugins: [
            {convertPathData: {floatPrecision: 2}},
            {cleanupNumericValues: {floatPrecision: 1}},
            {cleanupListOfValues: {floatPrecision: 1}},
            {removeViewBox: true}
          ]
        })
      ])
      .on('error', handleErrors)
    )
    .pipe(gulp.dest(path.dist.images))
});
