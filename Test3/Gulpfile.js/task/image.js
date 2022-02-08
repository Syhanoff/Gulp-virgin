const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imgSharp = require("gulp-sharp-responsive");
const gulpif = require('gulp-if');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


const imgTask = () => {
  return src(route.img.srcWeb)
    .pipe(plumber(
      notify.onError({
      title: "Images",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(changed(route.img.dest))
    .pipe(imgSharp(setting.imgSharp))
    .pipe(dest(route.img.dest))
    .pipe(src(route.img.src))
    .pipe(changed(route.img.dest))
    .pipe(gulpif(setting.isProd, imagemin(setting.imagemin)))
    .pipe(dest(route.img.dest))
}

module.exports = imgTask;
