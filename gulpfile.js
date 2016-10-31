var gulp = require("gulp");
var uglify = require("gulp-uglify");
var sysBuilder = require('systemjs-builder');

// Generate systemjs-based builds
gulp.task('bundle:js', function() {
  var builder = new sysBuilder('', './systemjs.config.js');
  return builder.buildStatic('app', 'app/index.min.js');
});

// Minify JS bundle
gulp.task('minify:js', function() {
  return gulp
    .src('app/index.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('app'));
});

gulp.task('scripts', ['bundle:js', 'minify:js']);