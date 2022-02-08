const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const include = require('gulp-file-include');
const AvifWebpHtml = require('gulp-avif-webp');
const replace = require('gulp-replace');
const typograf = require('gulp-typograf');
const gulpif = require('gulp-if');
const versions = require('gulp-version-number');
const size = require('gulp-size');
const htmlmin = require('gulp-htmlmin');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка HTML
const htmlTask = () => {
  return src(route.html.src)
    .pipe(plumber(
      notify.onError({
      title: "HTML",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(include())
    .pipe(AvifWebpHtml())
    .pipe(replace(/@img\//g, 'img/'))
    .pipe(typograf(setting.typograf))
    .pipe(gulpif(setting.isProd, versions(setting.versions)))
    .pipe(gulpif(setting.isProd, size({ title: "html" })))
    .pipe(gulpif(setting.isProd, htmlmin(setting.htmlmin)))
    .pipe(gulpif(setting.isProd, size({ title: "htmlmin" })))
    .pipe(dest(route.html.dest))
    .pipe(browserSync.stream());
}

module.exports = htmlTask;
