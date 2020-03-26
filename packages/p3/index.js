const { plus2 } = require('@namespace/p2');
const { multiplyBy2 } = require('@namespace/p1');

const result5plus1 = plus2(5);
const result10times2 = multiplyBy2(10);

console.log('result5plus1:', result5plus1); // 7
console.log('result10times2:', result10times2); // 20
