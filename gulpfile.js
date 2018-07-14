var gulp = require('gulp');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(['./public/*.html', './public/js/*.js']).on('change', function() {
		livereload.reload()
	});
});


gulp.task('default', ['connect', 'watch']);
