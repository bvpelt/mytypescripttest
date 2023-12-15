const small = 1;
const medium = 2;
const large = 3;

enum Size {Small, Medium, Large};        // first value is 0 by default
enum Size1 {Small = 1, Medium, Large};   // first value is 1

// generated javascript code is much smaller
const enum Size2 {Small, Medium, Large}; // first value is 0 by default

let mySize: Size = Size.Medium;
let mySize2: Size2 = Size2.Large;

console.log('mysize: ', mySize);
