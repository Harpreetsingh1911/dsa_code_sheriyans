// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

// let sum2 = arr.reduce((a, b) => {
//   return a + b;
// }, 0);

// console.log(sum);

//! max number in array

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

//todo  second method

// const arr = [1, 5, 3, 9, 2];
// const max = Math.max(...arr);
// console.log(max); // 9

//! min number in array

// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

//!second max number
let arr = [84, 859, 869, 93, 95, 4, 5, 4583, 2334, 3939, 783, 3883, 3628, 4949];
// agr essa array  ho to problem ho jaee ge code mai👇
let arr2 = [10, 20, 30, 40, 50, 50, 50];

// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (max < arr[i]) {
//     smax = max;
//     max = arr[i];
//   } else if (smax < arr[i]) {
//     smax = arr[i];
//   }
// }

// tbb output aaegi => 50 50 lekin jo glt hai to hmme kya krna pde ga
// let max = Math.max(arr2[0], arr2[1]);
// let smax = Math.min(arr2[0], arr2[1]);

// for (let i = 2; i < arr2.length; i++) {
//   if (max < arr2[i]) {
//     smax = max;
//     max = arr2[i];
//   } else if (smax < arr2[i] && max != arr2[i]) {
//     smax = arr2[i];
//   }
// }

// console.log("max number in arry", max);
// console.log("second max number in arry", smax);

//! reverse number

// first metho using extra space
// let newSpace = [];
// for (let i = arr2.length - 1; i >= 0; i--) {
//   newSpace.push(arr2[i]);
//   arr2.pop();
// }

// second method same extra space

// let newSpace = new Array(arr2.length);

// let j = 0;
// for (let i = arr2.length - 1; i >= 0; i--) {
//   newSpace[j] = arr2[i];
//   j++;
// }
// console.log(newSpace);

// third method

// let i = 0;
// let j = arr.length - 1;
// console.log(arr);

// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

//! all zeros left and all zeros in one

let array = [0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1];

for (let i = 0; i < array.length; i++) {
  let temp = array[i];
  if (array[i + 1] < array[i]) {
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
}

console.log(array);
