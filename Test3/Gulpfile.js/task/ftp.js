const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const path = require('path');
const rootFolder = path.basename(path.resolve());
const util = require('gulp-util');
const ftp = require('vinyl-ftp');


// Конфигурация
const route = require('../config/route');
const ftpRoute = require('../config/ftp');


// Деплой на сервер
const ftpTask = () => {
  let configFTP = ftp.create (ftpRoute.config);
  configFTP.log = util.log
  return src(route.deploy.src, {})
    .pipe(plumber(
    notify.onError({
      title: "FTP",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(configFTP.newer(`/${ftpRoute.ftpFolder}/${rootFolder}`))
    .pipe(configFTP.dest(`/${ftpRoute.ftpFolder}/${rootFolder}`));
}

module.exports = ftpTask;
