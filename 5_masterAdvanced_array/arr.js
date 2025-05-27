//left rotation by k element with temp Array
let arr = [1, 2, 3, 4, 5];
let temArr = new Array(arr.length);

let k = 3;
for (let i = 0; i < arr.length; i++) {
  temArr[i] = arr[(i + k) % arr.length];
}
console.log(temArr);

