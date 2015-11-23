var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat-json2js'),
    path   = global.config.paths;

gulp.task('_scripts', ['custom-scripts', 'vendor-scripts']);

// Task custom-scripts
gulp.task('custom-scripts', function() {
  gulp.src(path.src.js+'**.json')
    .pipe(concat())
    .pipe(jshint())
    .pipe(jshint.reporter())
    .pipe(gulp.dest(path.dist.js))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(path.dist.js));
});

// Task vendor-scripts
gulp.task('vendor-scripts', function() {
  gulp.src(path.src.js+'vendor/**.json')
    .pipe(concat())
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(path.dist.js));
});
