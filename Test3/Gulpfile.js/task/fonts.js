const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');
const changed = require('gulp-changed');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка eot файлов
const fontsEotTask = () => {
  return src(route.fonts.srcEot)
    .pipe(plumber(
      notify.onError({
      title: "FontsEOT",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(changed(route.fonts.srcTtf))
    .pipe(fonter(setting.fonterEot))
    .pipe(dest(route.fonts.src))
}


// Обработка ttf файлов
const fontsTtfTask = () => {
  return src(route.fonts.srcTtf)
    .pipe(plumber(
      notify.onError({
      title: "FontsTTF",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(changed(route.fonts.dest))
    .pipe(fonter(setting.fonterTtf))
		.pipe(dest(route.fonts.dest))
    .pipe(src(route.fonts.srcTtf))
    .pipe(changed(route.fonts.dest))
		.pipe(ttf2woff2())
		.pipe(dest(route.fonts.dest))
}

module.exports = fontsEotTask;
module.exports = fontsTtfTask;
