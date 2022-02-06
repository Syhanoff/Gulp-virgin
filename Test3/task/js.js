const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const size = require('gulp-size');
const gulpif = require('gulp-if');
const rename = require("gulp-rename");
const changed = require('gulp-changed');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка JavaScript
const scriptsTask = () => {
  return src(route.js.src, { sourcemaps: !noBuild })
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
    .pipe(dest(route.js.dest));
}

module.exports = scriptsTask;
