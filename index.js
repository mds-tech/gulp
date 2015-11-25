require('es6-promise').polyfill();
var fs = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

global.config = JSON.parse(fs.readFileSync('gulp-config.json', 'utf8'));

tasks.forEach(function(task) {
    require('./tasks/' + task);
});
