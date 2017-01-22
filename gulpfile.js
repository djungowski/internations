const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const buildDirectory = 'build';
const assetsDirectory = buildDirectory + '/assets';
const babelOptions = {
	presets: ['es2015'],
	plugins: ['transform-react-jsx']
};

gulp.task('vendor-assets-js', () => {
	const webFiles = [
		'node_modules/react/dist/react.min.js',
		'node_modules/react-dom/dist/react-dom.min.js'
	];

	return gulp.src(webFiles)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(assetsDirectory + '/js/'));
});

gulp.task('lib-js', () => {
	return gulp.src('lib/**/*')
		.pipe(babel(babelOptions))
		.pipe(concat('app.js'))
		.pipe(gulp.dest(assetsDirectory + '/js/'));
});

gulp.task('templates', () => {
	return gulp.src('templates/**/*').pipe(gulp.dest(buildDirectory));
});

gulp.task('dev', ['build'], () => {
	return gulp.watch('lib/**/*', ['lib-js']);
});

gulp.task('build', ['vendor-assets-js', 'templates', 'lib-js']);

gulp.task('default', ['build']);