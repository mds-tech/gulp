#MDS Tech Gulp setup

This is our custom gulp configuration. If it works for you, great.

* `cd project`
* `git submodule add https://github.com/mds-tech/gulp`
* `cp gulp/example/* .`

Edit the gulp-config.json and .bower-sass-convert.sh

run `gulp watcher --url=www.mysite.local` to watch or `gulp --production` to compile and minify.

This setup also includes support for Laravel Elixir. If you don't want to use it, simply remove it from your gulpfile.js, and setup a default task.

We also make use of gulp-concat-json2js for js concat. This takes a .json file, and converts it into a .js file, concatenating all the js files listed inside. Simply create a file called main.json with the following content:
 ```
 [
  "file1.js",
  "file2.js",
  "file3.js"
 ]
 ```
 You can read more [here](https://www.npmjs.com/package/gulp-concat-json2js).
