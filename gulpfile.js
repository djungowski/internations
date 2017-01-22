const gulp = require('gulp');

const buildDirectory = 'build';

gulp.task('vendor-assets', () => {
	const webFiles = [
		'node_modules/react/dist/react.min.js',
		'node_modules/react-dom/dist/react-dom.min.js'
	];

	gulp.src(webFiles)
		.pipe(gulp.dest(buildDirectory + '/assets/js'));
});

gulp.task('templates', () => {
	gulp.src('templates/**/*').pipe(gulp.dest(buildDirectory));
});

gulp.task('default', ['vendor-assets', 'templates']);