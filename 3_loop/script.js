//!1. print hello world 100 times using loop

// for (let i = 0; i <= 100; i++) {
//   console.log("hello world");
// }

//!2. print to n number and vice versa

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
//todo---vice versa
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

//! sum of n natural number

// let n = +prompt("please enter a number for getting sum of natural number");

// if (isNaN(n)) {
//   console.log("invalid number");
// } else {
//   if (n > 0) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   } else {
//     console.log("enter valid number and more then zero");
//   }
// }

//! factorial of n number
// let n = +prompt("please enter a number for getting sum of natural number");

// if (isNaN(n)) {
//   console.log("invalid number");
// } else {
//   if (n > 0) {
//     let factorial = 1;
//     for (let i = 1; i <= n; i++) {
//       factorial *= i;
//     }
//     console.log(factorial);
//   } else {
//     console.log("enter valid number and more then zero");
//   }
// }

//! factor of n number //  a whole number that divides another number evenly, without leaving a remainder

// let n = +prompt("please enter a number for getting factor number");

// if (isNaN(n)) {
//   console.log("invalid number");
// } else {
//   if (n > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(n);
//   } else {
//     console.log("enter valid number and more then zero");
//   }
// }

//todo ------------second method --- pichle wale mai kya dikt hai kii  ye half tkk chl rha means agr kiise ne 12 dalla hai to 1,2,3,4 6,12 to ye  6 time chla lekin agr hmm khe kii  agr 12 / 1 === 0 hai to hmm ye kehh skte hai 1 * 12  means 1  or 12 both fatcor hai

// 🔹 1. Loop sirf √n tak chalana
// Agar n ka ek factor i hai, toh n / i bhi uska factor hoga.
// Is wajah se, loop √n tak chalane se kaam ho jayega.
// Example ke liye agar n = 36 hai:
// Tum 1 × 36, 2 × 18, 3 × 12, 4 × 9, 6 × 6 ke pairs nikal sakte ho.
// Agar i se n divisible hai (n % i === 0), toh i bhi factor hai aur n / i bhi factor hai.

// let n = +prompt("please enter a number for getting factor number");

// if (isNaN(n)) {
//   console.log("invalid number");
// } else {
//   if (n > 0) {
//     let factor = new Set();
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         factor.add(i);
//         factor.add(n / i);
//       }
//     }
//     console.log([...factor].sort((a, b) => a - b));
//   } else {
//     console.log("enter valid number and more then zero");
//   }
// }

//! prime number
let n = +prompt("please enter a number for getting factor number");

if (isNaN(n)) {
  console.log("invalid number");
} else {
  if (n >= 2) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        prime = false;
        break;
      }
    }
    console.log(n + " is  pritime number? :", prime);
  } else {
    console.log("enter valid number and more then zero");
  }
}
