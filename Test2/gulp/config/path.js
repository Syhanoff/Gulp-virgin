import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const app = './src/';
const dist = './dist/';

export const path = {
   bueld: {
      files: '${buildFolder}/files/'
   },
   src: {
      files: '${srcFolder}/files/**/*.*',
   },
   watch: {},
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp:''
}



// const configPath = {
//    app : {
//          html : [app + '*.html', "!" + app + '_*.html'],
//          style : app + 'scss/**/*.+(scss|sass)',
//          fonts : app + 'fonts/*.ttf',
//          styleFonts : app + 'scss/_fonts.scss',
//          fontsOld : app + 'fonts/*.eot',
//          img : [app + 'img/**/*.+(jpeg|jpg|png|svg|gif)', '!' + app + 'img/svg/*.svg'],
//          imgWebp : [app + 'img/**/*.+(jpeg|jpg|png|gif)', '!' + app + 'img/svg/*.svg'],
//          svg : app + 'img/svg/*.svg',
//          js : [app + 'js/**/*.js', '!' + app + 'js/libs/*.js'],
//          jsLib : app + 'js/libs/*.js',
//          assets : [app + 'assets/**/*.*','!' + app + 'assets/favicon/*.*'],
//          fav : app + 'assets/favicon/*.png',
//          favCode : app + 'parts/favicon.html'
//    },
//    dist : {
//          html : dist,
//          style : dist + 'css/',
//          fonts : dist + 'fonts/',
//          fontsOld : app + 'fonts/',
//          img : dist + 'img/',
//          svg : dist + 'img/svg/',
//          js : dist + 'js/',
//          assets : dist,
//          fav: app + 'assets/favicon/',
//          favCode : app + 'parts/'
//    },
//    watch : {
//          html : app + '**/*.html',
//          style : app + 'scss/**/*.+(scss|sass)',
//          fonts : app + 'fonts/*.ttf',
//          fontsOld : app + 'fonts/*.eot',
//          img : [app + 'img/**/*.+(jpeg|jpg|png|svg|gif)', "!" + app + 'img/svg/*.svg'], 
//          imgWebp : [app + 'img/**/*.+(jpeg|jpg|png|gif)', '!' + app + 'img/svg/*.svg'],
//          svg : app + 'img/svg/*.svg',
//          js : app + 'js/**/*.js',
//          assets : [app + 'assets/**/*.*','!' + app + 'assets/favicon/*.*'],
//    }
// }