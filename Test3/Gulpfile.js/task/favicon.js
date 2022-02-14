const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const favicons = require ('gulp-favicons');
const filter = require ('gulp-filter');
// const realFavicon = require ('gulp-real-favicon');
// const fs = require('fs');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');



const faviconTask = () => {
  return src(route.favicon.src)
    .pipe(plumber(
      notify.onError({
      title: "Favicon",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(rename(setting.renameFav))
    .pipe(dest(route.favicon.dest))
    .pipe(favicons(setting.favicon))
    .pipe(dest(route.favicon.dest))
    .pipe(filter([
      'favicon.ico'
    ]))
    .pipe(dest(route.root));
}


module.exports = faviconTask;

// Переименование иконки favicon
// const nameFavTask = () => {
//   return src(route.favicon.src)
//     .pipe(plumber(
//       notify.onError({
//       title: "FavName",
//       message: "Error: <%= error.message %>"
//       })
//     ))
//     .pipe(rename(setting.renameFav))
//     .pipe(dest(route.favicon.destIcon))
// }


// Создание кода favicon
// const genFavTask = () => {
//   realFavicon.generateFavicon({
//     masterPicture: route.favicon.srcIcon,
//     dest: route.favicon.dest,
//     iconsPath: route.favicon.destIconSet,
//     design: {
//       ios: {
//         pictureAspect: 'noChange',
//         assets: {
//           ios6AndPriorIcons: false,
//           ios7AndLaterIcons: false,
//           precomposedIcons: false,
//           declareOnlyDefaultIcon: true
//         }
//       },
//       desktopBrowser: {
//         design: 'raw'
//       },
//       windows: {
//         pictureAspect: 'noChange',
//         backgroundColor: '#ffffff',
//         onConflict: 'override',
//         assets: {
//           windows80Ie10Tile: false,
//           windows10Ie11EdgeTiles: {
//             small: false,
//             medium: true,
//             big: false,
//             rectangle: false
//           }
//         }
//       },
//       androidChrome: {
//         pictureAspect: 'noChange',
//         themeColor: '#ffffff',
//         manifest: {
//           display: 'standalone',
//           orientation: 'notSet',
//           onConflict: 'override',
//           declared: true
//         },
//         assets: {
//           legacyIcon: false,
//           lowResolutionIcons: false
//         }
//       },
//       safariPinnedTab: {
//         pictureAspect: 'silhouette',
//         themeColor: '#ffffff'
//       }
//     },
//     settings: {
//       scalingAlgorithm: 'Mitchell',
//       errorOnImageTooSmall: false,
//       readmeFile: false,
//       htmlCodeFile: false,
//       usePathAsIs: false
//     },
//     markupFile: FAVICON_DATA_FILE
//   })
// }

// var FAVICON_DATA_FILE = 'faviconData.json';


// Установка кода favicon в HTML
// const insertFavTask = () => {
//   src(route.favicon.srcInk)
//   .pipe(plumber(
//     notify.onError({
//     title: "Favicon",
//     message: "Error: <%= error.message %>"
//     })
//   ))
//   .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
//   .pipe(dest(route.favicon.destInk))
// }

// module.exports = nameFavTask;
// module.exports = genFavTask;
// module.exports = insertFavTask;
