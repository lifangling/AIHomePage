(function() {

  'use strict';

  const gulp = require('gulp');
  const concat = require('gulp-concat');
  const uglify = require('gulp-uglify')
  const babel = require('gulp-babel');
  const replace = require('gulp-replace');
  const imagemin = require('gulp-imagemin');
  const cleanCSS = require('gulp-clean-css');
  const sourcemaps = require('gulp-sourcemaps');
  const sass = require('gulp-sass');
  const sassOptions = {
    errLogToConsole: true
  };
  const autoprefixer = require('gulp-autoprefixer');
  const browserSync = require('browser-sync').create(); //浏览器实时刷新


  var cssFile = [
    'scss/common.scss',
    'scss/homePage.scss'
  ]

  gulp.task('css', function() {
    return gulp.src(cssFile)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(concat('css/homePage.css'))
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({
        stream: true
      }));
  })

  var solvesFile = [
    'scss/common.scss',
    'scss/solves.scss'
  ]

  gulp.task('solvesCss', function() {
    return gulp.src(solvesFile)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(concat('css/solves.css'))
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({
        stream: true
      }));
  })

  var activitiesFile = [
    'scss/common.scss',
    'scss/activities.scss'
  ]

  gulp.task('activitiesCss', function() {
    return gulp.src(activitiesFile)
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(concat('css/activities.css'))
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({
        stream: true
      }));
  })

  gulp.task('watchCss', function() {
    gulp.watch(cssFile, ['css']),
      gulp.watch(solvesFile, ['solvesCss']),
      gulp.watch(activitiesFile, ['activitiesCss'])
  })

  var jsFile = [
    'js/common.js'
  ]

  gulp.task('js', function() {
    return gulp.src(jsFile)
      .pipe(concat('compiled.AIHome.js'))
      /*  .pipe(uglify({
         preserveComments: 'some',
         mangle: false,
         compress: true,
         beautify: true
       }))*/
      .pipe(gulp.dest('compiled/js/'))
  })

  gulp.task('watchJs', function() {
    gulp.watch(jsFile, ['js'])
  })

  gulp.task('imgs', function() {
    return gulp.src('imgs/**/*.+(png|jpg|gif|svg)')
      .pipe(imagemin())
      .pipe(gulp.dest('compiled/imgs'))
  });

  gulp.task('server', ['watchJs', 'watchCss', 'imgs'], function() {
    // 从这个项目的根目录启动服务器
    browserSync.init({
      files: ['**'], // 可以用这个监控html变化
      server: './', // 设置服务器的根目录
    });
  });

  gulp.task('default', ['server']); //一个gulp命令既可以起服务又可以监控压缩css,js，啦啦啦啦啦

})();