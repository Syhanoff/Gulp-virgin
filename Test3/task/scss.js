const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();


// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const sass = gulpSass(dartSass);
const size = require('gulp-size');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sassGlob = require('gulp-sass-glob');
const replace = require('gulp-replace');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');
const group = require('gulp-group-css-media-queries');
// const avifWebpCss = require('gulp-avif-css');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');
const noBuild = require('../config/release');


// Обработка SCSS
const stylesTask = () => {
  src(route.scss.srcLibs, { sourcemaps: !noBuild })
    .pipe(plumber(
      notify.onError({
      title: "SCSSLibs",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass.sync(setting.sass))
    .pipe(size({
      title: "libs.css"
    }))
    .pipe(cleanCss(setting.cleanCss))
    .pipe(rename(setting.rename))
    .pipe(size({
      title: "libs.min.css"
    }))
    .pipe(dest(route.scss.dest));
  return src(route.scss.src, { sourcemaps: !noBuild })
    .pipe(plumber(
      notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sassGlob())
    .pipe(sass.sync(setting.sass))
    // .pipe(avifWebpCss())
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(shorthand())
    .pipe(gulpif(noBuild, autoprefixer(setting.autoprefixer)))
    .pipe(gulpif(noBuild, group()))
    .pipe(dest(route.scss.dest))
    .pipe(gulpif(noBuild, size({
      title: "style.css"
    })))
    .pipe(gulpif(noBuild, cleanCss({
      level: 2,
    })))
    .pipe(rename(setting.rename))
    .pipe(gulpif(noBuild, size({
      title: "style.min.css"
    })))
    .pipe(dest(route.scss.dest, { sourcemaps: !noBuild }))
    .pipe(browserSync.stream());
}

module.exports = stylesTask;
