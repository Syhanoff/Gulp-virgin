const { src, dest } = require('gulp');
const del = require('del');

// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const zip = require('gulp-zip');
const path = require('path');
const rootFolder = path.basename(path.resolve());


// Конфигурация
const route = require('../config/route');


// Создание zip-архива
const zipTask = (done) => {
  del(route.zip.destOld);
  return src(route.deploy.src, {})
    .pipe(plumber(
      notify.onError({
        title: "ZIP",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(zip(`${rootFolder}.zip`))
    .pipe(dest(route.zip.destNew));
}

module.exports = zipTask;
