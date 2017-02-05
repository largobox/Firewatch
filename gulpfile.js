'use strict';

const         gulp = require('gulp');
const         sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const  browserSync = require('browser-sync').create();

gulp.task('server', ['build'], function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./assets/sass/*.sass', ['build']);
	gulp.watch(['./assets/css/**/*.*', './index.html']).on('change', browserSync.reload);

});

gulp.task('build', function () {
	return gulp.src('./assets/sass/all.sass')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['server']);