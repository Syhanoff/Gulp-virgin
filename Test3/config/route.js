const routeSrc = './source/';
const routeDest = './release/';

module.exports = {
  root: routeDest,
  html: {
    src: routeSrc + "html/*.html",
    watch: routeSrc + "html/**/*.html",
    dest: routeDest
  },
  scss: {
    src: routeSrc + "scss/*.+(scss|sass)",
    srcLibs: routeSrc + "scss/libs/*.+(scss|sass|css)",
    watch: routeSrc + "scss/**/*.+(scss|sass)",
    dest: routeDest + "css/"
  },
  fonts: {
    srcEot: routeSrc + "fonts/*.eot",
    srcTtf: routeSrc + "fonts/*.ttf",
    src: routeSrc + "fonts/",
    srcFontFace: routeSrc + "scss/config/_fonts.scss",
    watch: routeSrc + "fonts/*.+(eot|ttf|woff|woff2)",
    dest: routeDest + "fonts/"
  },
  img: {
    src: [routeSrc + "img/**/*.+(jpeg|jpg|png|gif|svg)", "!" + routeSrc + "img/svg/*.svg"],
    srcWeb: routeSrc + "img/**/*.+(jpeg|jpg|png|gif)",
    watch: [routeSrc + "img/**/*.+(jpeg|jpg|png|gif|svg)", "!" + routeSrc + "img/svg/*.svg"],
    dest: routeDest + "img/"
  },
  svg: {
    src: routeSrc + "img/svg/*.svg",
    watch: routeSrc + "img/svg/*.svg",
    dest: routeDest + "img/svg"
  },
  favicon: {
    src: routeSrc + "assets/favicon/*.png",
    srcIcon: routeSrc + "assets/favicon/favicon.png",
    srcInk: routeSrc + "html/parts/favicon.html",
    watch: routeSrc + "",
    destIcon: routeSrc + "assets/favicon/",
    destIconSet: routeSrc + "favicon/",
    destInk: routeSrc + "html/parts/",
    dest: routeDest + "favicon/",
  },
  js: {
    src: routeSrc + "js/main.js",
    watch: routeSrc + "js/**/*.js",
    dest: routeDest + "js/"
  },
  assets: {
    src: [routeSrc + "assets/**/*.*", "!" + routeSrc + "assets/favicon/*.*"],
    watch: [routeSrc + "assets/**/*.*", "!" + routeSrc + "assets/favicon/*.*"],
    dest: routeDest
  },
  zip: {
    destOld: "./*.zip",
    destNew: "./"
  },
  deploy: {
    src: [routeDest + '**/*.*'],
  }
}
