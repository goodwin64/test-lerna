const plus1 = require('@namespace/p1').plus1;

function plus2(x) {
  return plus1(plus1(x));
}

module.exports = {
  plus2,
};
