import { a, add } from './file2.mjs'
import a3, { b as b3, add as add3 } from './file3.mjs'



console.log(a);
console.log(add(2, 2));

console.log(a3);
console.log(b3);
console.log(add3(1, 2, 3));
