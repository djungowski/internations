const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const webpack = require('gulp-webpack');
const less = require('gulp-less');

const buildDirectory = 'build';
const assetsDirectory = buildDirectory + '/assets';
const babelOptions = {
	presets: ['es2015'],
	plugins: ['transform-react-jsx']
};

gulp.task('build-css', () => {
	const cssFiles = [
		'css/**/*.less'
	];

	return gulp.src(cssFiles)
		.pipe(less())
		.pipe(concat('internations.css'))
		.pipe(gulp.dest(assetsDirectory + '/css/'));
});

gulp.task('build-js', () => {
	return gulp.src('lib/**/*')
		.pipe(webpack({
			module: {
				loaders: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						query: babelOptions
					}
				]
			},
			output: {
				filename: 'app.js'
			}
		}))
		.pipe(gulp.dest(assetsDirectory + '/js/'));
});

gulp.task('templates', () => {
	return gulp.src('templates/**/*').pipe(gulp.dest(buildDirectory));
});

gulp.task('dev', ['build'], () => {
	const watchFiles = [
		'lib/**/*',
		'css/**/*'
	];
	return gulp.watch(watchFiles, ['build-js', 'build-css']);
});

gulp.task('build', ['templates', 'build-js', 'build-css']);

gulp.task('default', ['build']);