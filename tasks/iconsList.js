var gulp          = require('gulp'),
		fs            = require('fs'),
		toJson        = require('gulp-to-json'),
		cwd           = require('cwd'),
		jsonSass      = require('json-sass'),
		source        = require('vinyl-source-stream'),
		rename        = require('gulp-rename'),
		handleErrors  = require('../util/handleErrors'),
		path          = global.config.paths,
		iconsVars     = global.config.icons;

var basePath  = cwd(path.src.icons),
		regexPath = new RegExp('('+basePath.replace(/\//g, "\\/")+'\/)|(\.svg)', 'g'),
		jsonPath  = basePath+'/'+iconsVars.jsonFilePath,
		sassPath  = path.src.sass+iconsVars.sassFilePath,
		jsonFile  = iconsVars.jsonFileName,
		sassFile  = iconsVars.sassFileName;

gulp.task('_icons', ['iconsList', 'iconsSass']);

gulp.task('iconsList', function () {
	return gulp.src(path.src.icons+'*.svg')
		.pipe(toJson({
			filename: jsonPath+jsonFile,
			strip: regexPath,
		}));
});

gulp.task('iconsSass', function() {
	return fs.createReadStream(jsonPath+jsonFile)
		.pipe(jsonSass({
			prefix: iconsVars.sassPrefix+': ',
		}))
		.pipe(source(jsonPath+jsonFile))
		.pipe(rename('_'+sassFile))
		.pipe(gulp.dest(sassPath));
});

