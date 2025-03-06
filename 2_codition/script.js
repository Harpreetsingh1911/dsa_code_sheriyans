// let userInput = +prompt("Please enter your name:");

//?valid voter
// console.log(userInput);
// if (userInput >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can not vote");
// }

// //? shop discount => ekk essa program likho jo user se input lee kii kitna bill hai or fer uss bill prr discount lgaee kii 5000 se kmm hai to 0 percent discount agr 5000 or 7000 tkk hai to 10% and agr esse upr hai to discount hai 20 percent

// //!first method hai basic method
// let billAmount = +prompt("Please enter bill amount");
// if (billAmount <= 5000 && billAmount > 0) {
//   console.log(billAmount);
// } else if (billAmount <= 7000 && billAmount > 500) {
//   console.log(billAmount - Math.floor(billAmount * 10) / 100);
// } else if (billAmount > 7000) {
//   console.log(billAmount - Math.floor(billAmount * 20) / 100);
// } else {
//   console.log("wrong input");
// }

//!second method is

// let billAmount = +prompt("Please enter bill amount");

// let discount = 0;
// if (isNaN(billAmount)) {
//   console.log("wrong input");
// } else {
//   if (billAmount <= 5000 && billAmount > 0) {
//   } else if (billAmount <= 7000 && billAmount > 500) {
//     discount = 10;
//   } else if (billAmount > 7000) {
//     discount = 20;
//   }
//   console.log(billAmount - Math.floor(billAmount * discount) / 100);
// }

//? third question electicity bill

// let units = +prompt("Please enter bill amount");

// let amount = 0;
// if (isNaN(units)) {
//   console.log("wrong input");
// } else {
//   if (units > 400) {
//     let Extraunits = units - 400;
//     units = units - Extraunits;
//     amount = Math.floor(Extraunits * 13);
//   }
//   if (units > 200) {
//     let Extraunits = units - 200;
//     units = units - Extraunits;
//     amount = amount + Math.floor(Extraunits * 8);
//   }
//   if (units > 100) {
//     let Extraunits = units - 100;
//     units = units - Extraunits;
//     amount = amount + Math.floor(Extraunits * 6);
//   }
//   if (units > 0) {
//     let Extraunits = units;
//     units = units - Extraunits;
//     amount = amount + Math.floor(Extraunits * 4);
//   }
// }

// console.log(amount);

//!second method

// let units = +prompt("Please enter bill amount");

// if (isNaN(units) || units < 0) {
//   console.log("Wrong input");
// } else {
//   let amount = 0;
//   const slabs = [
//     { limit: 400, rate: 13 },
//     { limit: 200, rate: 8 },
//     { limit: 100, rate: 6 },
//     { limit: 0, rate: 4 },
//   ];

//   for (let slab of slabs) {
//     if (units > slab.limit) {
//       let extraUnits = units - slab.limit;
//       amount += Math.floor(extraUnits * slab.rate);
//       units = slab.limit;
//     }
//   }

//   console.log(amount);
// }

//todo :> ekk program likho jo ekk given amount kee kitne note(paise) bne ge mai divide kree means => ekk 4200rs hai to 500 ka sbse bdha note hai hmare pass to -> 500*8 and bche 200 so 200 ka ekk to esse ekk program likho

// let amount = 4001;

// if (amount >= 500) {
//   console.log("500 notes :" + Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log("200 notes :" + Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log("100 notes :" + Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50 notes :" + Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log("20 notes :" + Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log("10 notes :" + Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log("5 notes :" + Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log("2 notes :" + Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log("1 notes :" + amount);
// }

//!second method
// let amount = 4001;
// let note = [500, 400, 200, 100, 50, 20, 10, 5, 2, 1];

// note.forEach((n) => {
//   if (amount >= n) {
//     console.log(`${n} note :` + Math.floor(amount / n));
//     amount = amount % n;
//   }
// });

//! third method

// let amount = 4200;
// let note = [500, 200, 100, 50, 20, 10, 5, 2, 1];

// for (let n of note) {
//   debugger;
//   if (amount === 0) break;
//   if (amount >= n) {
//     console.log(`${n} note : ${Math.floor(amount / n)}`);
//     amount %= n;
//   }
// }

// ?-------------------------------------------------------------

// ternary operator

// condition ? true : false;

// example

// let ans = 12 > 13 ? "yes" : "no";

// console.log(ans);

// //Todo mulitple paramter

// let ans = 12 > 14 ? "yes" : 12 > 11 ? "yes" : "no";
// console.log(ans);

//?switch and one case handling multiple values

