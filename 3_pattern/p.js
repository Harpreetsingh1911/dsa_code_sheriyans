// let prompt = require("prompt-sync")();
// let n = prompt("enter a number ");

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// square pattern
let n = 5;
// for (let i = 0; i <= n; i++) {
//   let string = "";
//   for (let j = 0; j <= n; j++) {
//     string += "*";
//   }
//   console.log(string);
// }

// right angle pattern
// for (let i = 0; i < n; i++) {
//   let string = "";
//   for (let j = 0; j <= i; j++) {
//     string += "*";
//   }
//   console.log(string);
// }

// left angle pattern

// inverted right half angle pattern

// for (let i = n; i >= 0; i--) {
//   let string = "";
//   for (let j = 0; j <= i; j++) {
//     string += "*";
//   }
//   console.log(string);
// }

// left angle pattern

// for (let i = n; i >= 0; i--) {
//   let string = "";
//   for (let j = 0; j <= n; j++) {
//     if (j >= n - i) string += "*";
//     else string += " ";
//   }
//   console.log(string);
// }

// another method part 2
// for (let i = n; i >= 0; i--) {
//   let string = "";
//   for (let j = 0; j <= n; j++) {
//     if (j >= i) string += "*";
//     else string += " ";
//   }
//   console.log(string);
// }

// another method => part 3

// for (let i = 0; i < n; i++) {
//   let string = "";
//   for (let j = 0; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k <= n; k++) {
//     if (k >= n - i) string += "*";
//   }
//   console.log(string);
// }

// another method => part 4

// let n1 = 1;

// for (let i = 0; i <= n; i++) {
//   let str = "";
//   let count = 0;
//   for (let j = 3; j >= 0; j--) {
//     if (count < n1) {
//       str += "*";
//       count++;
//     } else str = " ";
//   }
//   n1++;
//   console.log(str);
// }

//!-------------
// a
// a b
// a b c
// a b c d

// for (let i = 0; i <= n; i++) {
//   let ascii = 97;

//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += String.fromCharCode(ascii) + " ";
//     ascii++;
//   }
//   console.log(str);
// }

// !----------

// a
// b c
//d e f
// g h i j

// let ascii = 97;
// for (let i = 0; i <= n; i++) {
//   let str = "";

//   for (let j = 0; j <= i; j++) {
//     str += String.fromCharCode(ascii) + " ";
//     ascii++;
//   }
//   console.log(str);
// }
