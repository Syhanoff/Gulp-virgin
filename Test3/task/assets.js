const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");


// Конфигурация
const route = require('../config/route');


// Копирование файлов
const assetsTask = () => {
	return src(route.assets.src)
    .pipe(plumber(
      notify.onError({
      title: "Assets",
      message: "Error: <%= error.message %>"
      })
    ))
		.pipe(dest(route.assets.dest))
    .pipe(browserSync.stream());
}

module.exports = assetsTask;
