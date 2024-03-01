// EXAMPLE 1 - Replace an Element in an Array in JavaScript

const arr = ['a', 'b', 'c'];

const index = arr.indexOf('a'); // 👉️  0

if (index !== -1) {
  arr[index] = 'z';
}

console.log(arr); // 👉️ ['z', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace an Element in an Array using Array.splice()

// const arr = ['a', 'b', 'c'];

// const index = arr.indexOf('a'); // 👉️  0

// arr.splice(index, 1, 'z');

// console.log(arr); // 👉️ [ 'z', 'b', 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace an Element in an Array using a for loop

// const arr = ['a', 'b', 'c'];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] === 'a') {
//     arr[index] = 'z';
//     break;
//   }
// }

// console.log(arr); // 👉️ ['z', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 4 -  Replace an Element in an Array using Array.map()

// const arr = ['a', 'b', 'c'];

// const newArr = arr.map(element => {
//   if (element === 'a') {
//     return 'z';
//   }
//   return element;
// });

// console.log(newArr); // 👉️ ['z', 'b', 'c']

// console.log(arr); // 👉️ ['a', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 5 - Replace an Element in an Array using Array.forEach()

// const arr = ['a', 'b', 'c', 'a', 'a'];

// arr.forEach((element, index) => {
//   if (element === 'a') {
//     arr[index] = 'z';
//   }
// });

// // 👇️ [ 'z', 'b', 'c', 'z', 'z' ]
// console.log(arr);
