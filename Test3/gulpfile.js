const {src, dest, watch, parallel, series} = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');

// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const size = require('gulp-size');
const gulpif = require('gulp-if');
const rename = require("gulp-rename");
const changed = require('gulp-changed');
const fs = require('fs');
// const path = require('path');
// const rootFolder = path.basename(path.resolve());
const util = require('gulp-util');
const ftp = require('vinyl-ftp');


// Конфигурация
const route = require('./config/route');


// Задачи
const htmlTask = require('./task/html');
const stylesTask = require('./task/scss');
const scriptsTask = require('./task/js');
const clear = require('./task/clear');
const fontsEotTask = require('./task/fonts');
const fontsTtfTask = require('./task/fonts');
const fontFaceTask = require('./task/font-face');
const imgTask = require('./task/image');
const svgTask = require('./task/svg');
const assetsTask = require('./task/assets');
const zipTask = require('./task/zip');

const nameFavTask = require('./task/favicon');
const genFavTask = require('./task/favicon');
const insertFavTask = require('./task/favicon');


// Сервер
const serverTask = () => {
  browserSync.init({
    server: {
      baseDir: route.root
      },
    notify: false,
    port: 3000,
  })
}


// Наблюдение
const watcherTask = () => {
  watch(route.html.watch, htmlTask);
  watch(route.scss.watch, stylesTask);
  watch((route.fonts.watch), fonts).on('change', browserSync.reload);
  watch((route.fonts.dest), fontFace).on('change', browserSync.reload);
  watch((route.img.watch), img).on('change', browserSync.reload);
  watch((route.svg.watch), svg).on('change', browserSync.reload);
  watch((route.js.watch), js).on('change', browserSync.reload);
  watch((route.assets.watch), assets);
}



let noBuild = false;
function toBuild (done) {
  noBuild = true;
  done();
};






// Запуск задач
exports.del = clear;
exports.html = htmlTask;
exports.scss = stylesTask;
exports.js = scriptsTask;
exports.clear = clear;
exports.fonts = series(fontsEotTask, fontsTtfTask);
exports.fontFace = fontFaceTask;
exports.wather = watcherTask;
exports.img = imgTask;
exports.svg = svgTask;
exports.assets = assetsTask;
exports.zip = zipTask;

exports.favicon = series(nameFavTask, genFavTask, insertFavTask);
exports.nameFav = nameFavTask;
exports.genFav = genFavTask;
exports.insertFav = insertFavTask;




// exports.ftp = ftpTask

// Сборка
exports.default = series(clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), stylesTask, parallel(watcherTask, serverTask));


// exports.default = series(clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask, parallel(watcherTask, serverTask));
// exports.build = series(toBuild, clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask);
// exports.deployZip = series(toBuild, clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask, zipTask);
// exports.deployFtp = series(toBuild, clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask, ftpTask);
