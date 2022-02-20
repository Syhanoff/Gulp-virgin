import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import favicons from "gulp-favicons";
import filter from "gulp-filter";


// Favicon
export default () => {
  return gulp.src(path.favicon.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'Favicon',
        message: error.message
      }))
    }))
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(favicons(app.favicons))
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(gulp.dest(path.root));
}