let noBuild = false;
const toBuild = (done) => {
  noBuild = true;
  done();
};

module.exports = toBuild;
module.exports = noBuild;
