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
const setting = require('../config/setting');



// Деплой на сервер
const ftpTask = () => {
  let configFTP = ftp.create ({
    host: "",
    user: "",
    password: "",
    parallel: 10
  });
  configFTP.log = util.log
  const ftpFolder = ``;
  return src(route.deploy.src, {})
    .pipe(plumber(
    notify.onError({
      title: "FTP",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(configFTP.dest(`/${ftpFolder}/${rootFolder}`));
}

module.exports = ftpTask;
