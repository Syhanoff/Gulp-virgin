let isProd = false;

const toProd = (done) => {
  isProd = true;
  done();
};

module.exports = toProd;
module.exports = isProd;
