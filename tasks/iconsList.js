var gulp = require('gulp'),
  fs = require('fs'),
  toJson = require('gulp-to-json'),
  cwd = require('cwd'),
  jsonSass = require('json-sass'),
  source = require('vinyl-source-stream'),
  rename = require('gulp-rename'),
  path = global.config.paths,
  iconsVars = global.config.icons;

var basePath = cwd(path.src.icons),
  jsonFile = basePath+'/'+iconsVars.jsonFileName;

gulp.task('icons', ['iconsList', 'iconsSass']);

gulp.task('iconsList', function () {
  return gulp.src(path.src.icons+'*.svg')
    .pipe(toJson({
      filename: jsonFile,
      strip: new RegExp('('+basePath.replace(/\//g, "\\/")+'\/)|(\.svg)', 'g'),
    }));
});

gulp.task('iconsSass', function() {
  return fs.createReadStream(jsonFile)
    .pipe(jsonSass({
      prefix: iconsVars.sassPrefix+': ',
    }))
    .pipe(source(jsonFile))
    .pipe(rename('_'+iconsVars.sassFileName))
    .pipe(gulp.dest(path.src.sass+iconsVars.sassFilePath));
});

