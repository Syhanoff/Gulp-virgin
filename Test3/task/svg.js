const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const svgSprite = require('gulp-svg-sprite');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Создание svg-спрайтов
const svgTask = () => {
	return src(route.svg.src)
    .pipe(plumber(
      notify.onError({
      title: "SVGSprite",
      message: "Error: <%= error.message %>"
      })
    ))
		.pipe(svgSprite(setting.svgSprite))
		.pipe(dest(route.svg.dest))
}

module.exports = svgTask;
