const var1 = require('./commonjs2');
const { a: a3, b: b3, add: add3 } = require('./commonjs3');

console.log(var1.a);
console.log(var1.add(2, 2));

console.log(a3);
console.log(b3);
console.log(add3(1, 2, 3));
