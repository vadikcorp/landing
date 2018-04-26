const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile SAss & Inject Into Browser
gulp.task('sass', function(){
	return gulp.src(['src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('js', function(){
	return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
		.pipe(gulp.dest("src/js"))
		.pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./src"
	});

	gulp.watch(['src/scss/*scss'], ['sass']);
	gulp.watch("src/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['js','serve']);