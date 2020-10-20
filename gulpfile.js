const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

var paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
};

gulp.task('include', async function () {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'));
});


// The default task (called when you run `gulp`)
gulp.task('default', function () {
  gulp.run('scripts', 'copy');

  // Watch files and run tasks if they change
  gulp.watch('js/**', function (event) {
    gulp.run('scripts');
  });

  gulp.watch([
    'image/**',
    'css**',
    '*.html'
  ], function (event) {
    gulp.run('copy');
  });
});

