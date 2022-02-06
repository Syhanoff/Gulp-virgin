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
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const fs = require('fs');
const zip = require('gulp-zip');
// const path = require('path');
// const rootFolder = path.basename(path.resolve());
const util = require('gulp-util');
const ftp = require('vinyl-ftp');


// Конфигурация
const route = require('./config/route');


// Задачи
const htmlTask = require('./task/html');
const stylesTask = require('./task/scss');
const clear = require('./task/clear');
const fontsEotTask = require('./task/fonts');
const fontsTtfTask = require('./task/fonts');
const fontFaceTask = require('./task/font-face');
const imgTask = require('./task/image');
const svgTask = require('./task/svg');
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
  watch((route.fonts.watch), fonts).on('change', browserSync.reload)
  watch((route.fonts.dest), fontFace).on('change', browserSync.reload)
  watch((route.img.watch), img).on('change', browserSync.reload)
  watch((route.svg.watch), svg).on('change', browserSync.reload)


  watch((configPath.watch.js), series(scriptsTask)).on('change', browserSync.reload)
  watch((configPath.watch.assets), series(assetsTask)).on('change', browserSync.reload)
}



let noBuild = false;
function toBuild (done) {
  noBuild = true;
  done();
};










const scriptsTask = () => {
  return src(configPath.app.js, { sourcemaps: !noBuild })
    .pipe(plumber(
      notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(babel())
    .pipe(webpack({
      mode: "development"
    }))


    // .pipe(webpack({
    //   mode: noBuild ? 'production' : 'development',
    //   output: {
    //     filename: 'main.min.js',
    //   },
    //   module: {
    //     rules: [{
    //       test: /\.m?js$/,
    //       exclude: /node_modules/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: [
    //             ['@babel/preset-env', {
    //               targets: "defaults"
    //             }]
    //           ]
    //         }
    //       }
    //     }]
    //   }
    // }))
    // .on('error', function (err) {
    //   console.error('WEBPACK ERROR', err);
    //   this.emit('end');
    // })
    .pipe(dest(configPath.dist.js));
}



const assetsTask = () => {
	return src(configPath.app.assets)
    .pipe(plumber(
      notify.onError({
      title: "Assets",
      message: "Error: <%= error.message %>"
      })
    ))
		.pipe(dest(configPath.dist.assets))
}






const zipTask = (done) => {
  del(`./*.zip`);
  return src(`${dist}/**/*.*`, {})
    .pipe(plumber(
      notify.onError({
        title: "ZIP",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(zip(`${rootFolder}.zip`))
    .pipe(dest(`./`));
}



const ftpTask = () => {
  let configFTP = ftp.create ({
    host: "",
    user: "",
    password: "",
    parallel: 10
  });
  configFTP.log = util.log
  const ftpFolder = ``;
  return src(`${dist}/**/*.*`, {})
    .pipe(plumber(
    notify.onError({
      title: "FTP",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(configFTP.dest(`/${ftpFolder}/${rootFolder}`));
}


// Запуск задач
exports.html = htmlTask;
exports.scss = stylesTask;
exports.clear = clear;
exports.fonts = series(fontsEotTask, fontsTtfTask);
exports.fontFace = fontFaceTask;
exports.wather = watcherTask;
exports.img = imgTask;
exports.svg = svgTask;
exports.favicon = series(nameFavTask, genFavTask, insertFavTask);



exports.nameFav = nameFavTask;
exports.genFav = genFavTask;
exports.insertFav = insertFavTask;






exports.script = scriptsTask
// exports.ftp = ftpTask
// exports.newFavicon = series(nameFavicon, genFavicon, insertFavicon)




// Сборка
exports.default = series(clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), stylesTask, parallel(watcherTask, serverTask));


// exports.default = series(clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask, parallel(watcherTask, serverTask));
// exports.build = series(toBuild, clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask);
// exports.deployZip = series(toBuild, clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask, zipTask);
// exports.deployFtp = series(toBuild, clear, parallel(htmlTask, imgTask, svgTask, fontsEotTask, fontsTtfTask, assetsTask, scriptsTask), fontStyleTask, stylesTask, ftpTask);
