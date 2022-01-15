const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const webpackStream = require('webpack-stream');
const path = require('path');
const rootFolder = path.basename(path.resolve());


const svgSprites = () => {
return src(paths.srcSvg)
   .pipe(
      svgmin({
      js2svg: {
         pretty: true,
      },
      })
   )
   .pipe(
      cheerio({
      run: function ($) {
         $('[fill]').removeAttr('fill');
         $('[stroke]').removeAttr('stroke');
         $('[style]').removeAttr('style');
      },
      parserOptions: {
         xmlMode: true
      },
      })
   )
   .pipe(replace('&gt;', '>'))
   .pipe(svgSprite({
      mode: {
      stack: {
         sprite: "../sprite.svg"
      }
      },
   }))
   .pipe(dest(paths.buildImgFolder));
}



const scripts = () => {
return src(paths.srcMainJs)
   .pipe(webpackStream({
      mode: isProd ? 'production' : 'development',
      output: {
      filename: 'main.js',
      },
      module: {
      rules: [{
         test: /\.m?js$/,
         exclude: /node_modules/,
         use: {
            loader: 'babel-loader',
            options: {
            presets: [
               ['@babel/preset-env', {
                  targets: "defaults"
               }]
            ]
            }
         }
      }]
      },
      devtool: !isProd ? 'source-map' : false
   }))
   .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
   })
   .pipe(dest(paths.buildJsFolder))
   .pipe(browserSync.stream());
}


