const gulp = require('gulp');

gulp.task('vendor-web', function () {
	const webFiles = [
		'node_modules/react/dist/react.min.js',
		'node_modules/react-dom/dist/react-dom.min.js'
	];

	gulp.src(webFiles)
		.pipe(gulp.dest('build/assets/js'));
});

gulp.task('default', ['vendor-web']);