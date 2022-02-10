// Плагины
const fs = require('fs');


// Конфигурация
const route = require('../config/route');


// Установка weight параметров font-face
const checkWeight = (fontname) => {
  let weight = 400;
  switch (true) {
    case/Thin/.test(fontname): weight = 100;
    break;
    case/100/.test(fontname): weight = 100;
    break;
    case/ExtraLight/.test(fontname): weight = 200;
    break;
    case/200/.test(fontname): weight = 200;
    break;
    case/Light/.test(fontname): weight = 300;
    break;
    case/300/.test(fontname): weight = 300;
    break;
    case/Regular/.test(fontname): weight = 400;
    break;
    case/400/.test(fontname): weight = 400;
    break;
    case/Medium/.test(fontname): weight = 500;
    break;
    case/500/.test(fontname): weight = 500;
    break;
    case/SemiBold/.test(fontname): weight = 600;
    break;
    case/600/.test(fontname): weight = 600;
    break;
    case/Bold/.test(fontname): weight = 700;
    break;
    case/700/.test(fontname): weight = 700;
    break;
    case/ExtraBold/.test(fontname): weight = 800;
    break;
    case/800/.test(fontname): weight = 800;
    break;
    case/Black/.test(fontname): weight = 900;
    break;
    case/900/.test(fontname): weight = 900;
    break;
    default:
      weight = 400;
  }
  return weight;
}


// Установка style параметров font-face
const checkStyle = (fontname) => {
  let style = 'normal';
  switch (true) {
    case/italic/.test(fontname): style = 'italic';
    break;
    default: style = 'normal';
  }
  return style;
}


// Включение кода font-face в SCSS
const cb = () => {}
const fontFaceTask = (done) => {
	let file_content = fs.readFileSync(route.fonts.srcFontFace);
	fs.writeFile((route.fonts.srcFontFace), '', cb);
	fs.readdir((route.fonts.dest), function (err, items) {
		if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
				let fontname = items[i].split('.');
				fontname = fontname[0];
        let font = fontname.split('-')[0];
        let weight = checkWeight(fontname);
        let style = checkStyle(fontname);
				if (c_fontname != fontname) {
					fs.appendFile((route.fonts.srcFontFace), '@include font-face("' + font + '", "' + fontname + '", "' + weight + '", "' + style + '");\r\n', cb);
				}
				c_fontname = fontname;
			}
		}
	})
	done();
}

module.exports = fontFaceTask;
