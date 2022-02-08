const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const webpack = require('webpack-stream');
const babel = require('gulp-babel');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка JavaScript
const scriptsTask = () => {
  return src(route.js.src, { sourcemaps: setting.isDev })
    .pipe(plumber(
      notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(babel())
    .pipe(webpack({
      mode: setting.isProd ? 'production' : 'development',
      output: {
        filename: 'main.min.js'
      }
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
    .pipe(dest(route.js.dest), { sourcemaps: setting.isDev });
}

module.exports = scriptsTask;
