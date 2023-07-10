const gulp = require('gulp');
const dartSass  = require('sass');
const gulpSass  = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();

const sass = gulpSass(dartSass);


function buildConcatStyle() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest('./dist/css'));
}

function uglifyJS() {
    return gulp.src('./JS/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/JS'));
}

function watchStyles() {
    return gulp.watch('./sass/**/*.scss', buildConcatStyle)
}

function watchJS() {
    return gulp.watch('./JS/**/*.js', uglifyJS)
}

function modeIndexHTML() {
    return gulp.src('./index.html')
            .pipe(gulp.dest('./dist'))
}

function cleanDist() {
    return gulp.src('./dist')
        .pipe(clean())
}

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('./sass/**/*.scss', function() {
        buildConcatStyle()
        browserSync.reload()
    });
    gulp.watch('./JS/**/*.js', uglifyJS);

    gulp.watch("./index.html").on('change', function(){
      gulp.src('./index.html')
      .pipe(gulp.dest('./dist'));

    browserSync.reload();
  });
  });
  

exports.buildConcatStyle = buildConcatStyle;
exports.uglifyJS = uglifyJS;
exports.watchStyles = watchStyles;
exports.watchJS = watchJS;
exports.build = gulp.series(cleanDist ,modeIndexHTML, gulp.parallel(uglifyJS, buildConcatStyle));