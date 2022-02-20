global.$ = {
  // Пакеты
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),

  // Конфигурация
  path: require('./config/path.js'),
  app: require('./config/app.js')
};

// Задачи
const requireDir = require('require-dir');
const task = requireDir('./task', { recurse: true });


// Отслеживание изменений
const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);
  $.gulp.watch($.path.favicon.watch, task.favicon);
}


const build = $.gulp.series(
  task.clear,
  $.gulp.parallel(task.html, task.scss, task.js, task.img, task.font, task.favicon)
);

const dev = $.gulp.series(
  build,
  $.gulp.parallel(task.server, watcher)
);

// Публичные задачи
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;
exports.favicon = task.favicon;

// Сборка
exports.default = $.app.isProd
  ? build
  : dev;
