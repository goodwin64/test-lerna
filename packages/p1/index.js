const math = require('mathjs');

function plus1(x) {
  return x + 1;
}

function multiplyBy2(x) {
  return math.chain(x)
    .multiply(2)
    .done();
}

module.exports = {
  plus1,
  multiplyBy2,
};
