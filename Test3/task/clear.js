const del = require('del');


// Конфигурация
const route = require('../config/route');


// Очистка директории
const clear = () => {
  return del(route.root);
}

module.exports = clear;
