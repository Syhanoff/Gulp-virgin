const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  typograf: {
    locale: ['ru', 'en-US']
  },
  htmlmin: {
    collapseWhitespace: true,
    removeComments: true
  },
  versions: {
    'value' : '%DT%',
    'append' : {
      'key' : '_v',
      'cover' : 0,
      'to' : [
          'css',
          'js',
      ]
    },
    'output' : {
      'file' : 'version.json'
    }
  },
  sass: {
    outputStyle: 'expanded'
  },
  cleanCss: {
    level: 2
  },
  rename: {
    suffix: ".min"
  },
  autoprefixer: {
    cascade: true,
    grid: true
  },
  fonterEot: {
    formats: ['ttf']
  },
  fonterTtf: {
    formats: ['woff']
  },
  imgSharp: {
    formats: [
      { format: "webp" },
      { format: "avif" }
    ]
  },
  imagemin: {
    verbose: true,
    quality: 80,
    progressive: true,
    interlased: true,
    svgoPlagins: [{ removeViewBox: false }],
    optimizationLevel: 3
  },
  svgSprite: {
    mode: {
      stack: {
        sprite: '../sprite.svg',
        example: true
      }
    }
  },
  renameFav: {
    basename: "favicon"
  }
}



