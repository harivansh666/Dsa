// var prompt = require("prompt-sync")();

// function print(n) {
//   if (n === 0) return; // jab tak mera function return nahi hota tab kam meri value stack me he rahegi
//   print(n - 1);
//   console.log(n);
// }
// print(5);

// factorial is best example of recursion

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// function countDown(n) {
//   if (n === 0) return;

//   console.log(n);
//   return countDown(n - 1);
// }
// countDown(5);

// var n = prompt("How many more times? ");
// console.log(n);

// const nums = [-1, 0, 1, 2, -1, -4];

// function threeSum(nums) {
//   const result = [];
//   const set = [];

//   for (let i = 0; i <= nums.length - 2; i++) {}
//   console.log(set);
// }

// threeSum(nums);

// const nums = [3, 2, 4];
// const target = 6;

// // O(n2)
// // const twoSum = (nums, target) => {
// //   for (let i = 0; i < nums.length; i++) {
// //     for (let j = nums.length - 1; j > i; j--) {
// //       if (nums[i] + nums[j] === target) {
// //         return [i, j];
// //       }
// //     }
// //   }
// // };

// const twoSum = (nums, target) => {};

// console.log(twoSum(nums, target));

// function starPrint() {
//   const n = 4;

//   for (let i = 0; i <= n - 1; i++) {
//     for (let j = 0; j < n; j++) {
//       process.stdout.write("* ");
//     }

//     console.log();
//   }
// }

// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 9;

// // if value exist then return index if not return -1
// var search = (nums, target) => {
//   let mid = Math.floor(nums.length / 2);

//   let first = nums.slice(0, mid);
//   let second = nums.slice(mid);

//   console.log("newarray", newarray);
// };

// search(nums, target);

// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
// };
// console.log(twoSum(nums, target));

// Factorial;
// function factorial(n, ans = 1) {
//   if (n === 1) {
//     return ans;
//   }
//   return factorial(n - 1, ans * n);
// }
// console.log(factorial(5));

// print serial from 1 to n

// function serial(i, n) {
//   if (i > 5) {
//     return;
//   }
//   console.log(i);
//   serial(i + 1, n);
// }
// serial(1, 5);

// Print in terms of n to 1

// function PrintReverse(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   PrintReverse(n - 1);
// }
// PrintReverse(5);

// Fibonachi

// let prev2 = 0;
// let prev1 = 1;

// function Fibonachi(prev1, prev2) {
//   let newFibo = prev1 + prev2;
//   if (newFibo > 60) return;
//   console.log(newFibo);
//   Fibonachi(prev2, newFibo);
// }
// console.log(prev1);
// console.log(prev2);
// Fibonachi(prev1, prev2);

// function Fibonachi(n) {
//   if ((n === 0) | (n === 1)) return n;
//   return Fibonachi(n - 1) + Fibonachi(n - 2);
// }

// console.log(Fibonachi(6));

// space O(n), Time Com: O(2n)

// Calculate sum of first N numbers

// function sum(n) {
//   if (n === 1) return 1;

//   return n + sum(n - 1);
// }

// console.log(sum(5));

// Count digits of a number
// function totalNum(n) {
//   if (n === 1) return 1;

//   Math.floor(n / 10);
//   return 1 + totalNum(Math.floor(n / 10));
// }
// console.log(totalNum(1234598));
// console.log(Math.floor(1234598 / 10));

// Reverse a string using recursion

function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("hello"));
