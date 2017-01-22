const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const webpack = require('gulp-webpack');

const buildDirectory = 'build';
const assetsDirectory = buildDirectory + '/assets';
const babelOptions = {
	presets: ['es2015'],
	plugins: ['transform-react-jsx']
};

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
				],
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
	return gulp.watch('lib/**/*', ['lib-js']);
});

gulp.task('build', ['templates', 'build-js']);

gulp.task('default', ['build']);