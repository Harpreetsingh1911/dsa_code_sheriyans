//! bublle sort

// let arr = [20, 10, 5, 7, 8, 12, 15];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

//! selection sort

// let arr = [20, 10, 5, 7, 8, 12, 15];
// for (let i = 0; i < arr.length - 1; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[minIndex] > arr[j]) minIndex = j;
//   }
//   if (minIndex != i) {
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }

// console.log(arr);

//!insertion sort

let arr = [5, 10, 1, 8, 13, 7];
for (let i = 1; i < arr.length; i++) {
  debugger;
  let key = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = key;
}

console.log(arr);
