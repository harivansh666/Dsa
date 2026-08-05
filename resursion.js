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

