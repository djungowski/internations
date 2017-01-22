const gulp = require('gulp');
const babel = require('gulp-babel');

const buildDirectory = 'build';
const assetsDirectory = buildDirectory + '/assets';

gulp.task('vendor-assets-js', () => {
	const webFiles = [
		'node_modules/react/dist/react.min.js',
		'node_modules/react-dom/dist/react-dom.min.js'
	];

	return gulp.src(webFiles)
		.pipe(gulp.dest(assetsDirectory + '/js/vendor'));
});

gulp.task('lib-js', () => {
	return gulp.src('lib/**/*').pipe(babel({
		plugins: [
			'transform-react-jsx'
		]
	})).pipe(gulp.dest(assetsDirectory + '/js/lib/'));
});

gulp.task('templates', () => {
	return gulp.src('templates/**/*').pipe(gulp.dest(buildDirectory));
});

gulp.task('dev', () => {
	gulp.watch('lib/**/*', ['lib-js']);
});

gulp.task('build', ['vendor-assets-js', 'templates', 'lib-js']);

gulp.task('default', ['build']);