var
  gulp = require('gulp'),
  gulpsync = require('gulp-sync')(gulp),
  scss = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  connect = require('gulp-connect'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch');

  gulp.task('connect', function() {
    connect.server ({
      port: 3000,
      livereload: true,
    });
  });

  gulp.task('html', function () {
    gulp.src('index.html')
      .pipe(plumber())
      .pipe(connect.reload());
  });

  gulp.task('scss', function () {
    return scss(['dev/styles/app.styles.scss'], { 
      sourcemap: true,
      style: 'compact',
      compass: true
      })
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(autoprefixer({
          browsers: ['last 10 versions', '> 1%', 'ie 8', 'ie 9', 'ie 10', 'ie 11'],
          cascade: false
        }))
      .pipe(sourcemaps.write('maps', {
        includeContent: false,
        sourceRoot: 'source'
      }))
      .pipe(connect.reload())
      .pipe(gulp.dest('assets/styles/'));
  });

  gulp.task('watch', function() {
    gulp.watch('index.html', ['html']);
    gulp.watch('dev/styles/**/*', ['scss']);
  });
  gulp.task('default', gulpsync.sync([
    [
      'html',
      'scss',
      'connect'
    ],
    'watch'
  ]));