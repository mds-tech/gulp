var gulp         = require('gulp'),
    svg2png      = require('gulp-svg2png'),
    changed      = require('gulp-changed'),
    imagemin     = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    handleErrors = require('../util/handleErrors'),
    path         = global.config.paths;

gulp.task('images', ['_images']); // Gets overwritten by Elixir
gulp.task('_images', ['imagesCompress', 'imagesConvert']);

gulp.task('imagesConvert', function () {
  return gulp.src(path.src.images + '**/*.svg')
    .pipe(changed(path.dist.images))
    .pipe(svg2png()).on('error', handleErrors)
    .pipe(
      imagemin({
        progressive: true,
        use: [pngquant()]
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
        use: [pngquant()]
      })
      .on('error', handleErrors)
    )
    .pipe(gulp.dest(path.dist.images))
});
