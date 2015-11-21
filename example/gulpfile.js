require('es6-promise').polyfill();
require('./gulp');

var elixir = require('laravel-elixir'),
    paths  = global.paths;

elixir(function(mix) {
  mix
    .task('build')
    .version([paths.dist.css+'style.css', paths.dist.js+'main.min.js', paths.dist.js+'vendor.min.js'])
});
