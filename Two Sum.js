/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let a = 0; a < nums.length; a++) {
    for (let i = a + 1; i < nums.length; i++) {
      if (nums[a] + nums[i] == target) {
        return [a, i];
      }
    }
  }
};

// var twoSum = function (nums, target) {
//   let firstNum = nums[0];
//   let fisrtIndex = 0
//   for (let i = 1; i < nums.length; i++) {
//     if (firstNum + nums[i] == target) {
//       return [firstNum, i];
//     } else {
//     firstNum = nums[i]
//     fisrtIndex = i
//     }
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
