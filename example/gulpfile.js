require('./gulp');

var elixir = require('laravel-elixir'),
    path  = global.config.paths;

elixir(function(mix) {
  mix
    .task('build')
    .version([path.dist.css+'style.css', path.dist.js+'main.min.js', path.dist.js+'vendor.min.js'])
});
