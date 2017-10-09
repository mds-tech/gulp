var fs = require('fs'),
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  path = global.config.paths,
  angularDist = path.dist.angular,
  dest = 'public/',
  jsonFile = 'public/angular.json',
  argv = require('yargs').argv,
  supportedFileTypes = ['js', 'css', 'map'],
  production = argv.production;

gulp.task('angular', function () {
  var assetObject = {'css': {}, 'js': {}, 'map': {}},
      assets = fs.readdirSync(angularDist);

  try {
    var oldAssets = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

    supportedFileTypes.forEach(function (fileType) {
      if (oldAssets.hasOwnProperty(fileType)) {
        Object.keys(oldAssets[fileType]).forEach(function (key) {
          var file = oldAssets[fileType][key];
          fs.unlink(dest+file, function (err) {
            if (err) {
              console.log('Unable to delete '+file);
            }
          });
        })
      }
    });
  } catch (e) {
    console.log('Error: Could not delete old files...');
  }

  assets.forEach(function(asset) {
    var assetParts = asset.split('.');
    var fileType = assetParts.splice(-1, 1)[0];
    if (supportedFileTypes.includes(fileType)) {
      var stream = gulp.src(angularDist+asset);
      if (fileType === 'js' && production !== undefined) {
        stream.pipe(uglify());
      }
      stream.pipe(gulp.dest(dest+fileType));

      assetObject[fileType][assetParts[0]] = fileType+'/'+asset;
    }
  });

  fs.writeFile('public/angular.json', JSON.stringify(assetObject), 'utf8', function (err) {
    if (err) {
      console.log('Error: Could not update JSON file');

      return console.log(err);
    }

    console.log('Angular Path File Updated');
  });
});
