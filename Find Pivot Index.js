const nums = [1, 7, 3, 6, 5, 6];

var pivotIndex = function (nums) {
  let left = 0;
  // let right = 0;
  let sum = 0;
  let result = 0;
  nums.forEach((item) => {
    sum += item;
  });
  console.log(sum);

  let right = sum - nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (left !== right) {
      console.log(nums[i + 1]);
      left = left + nums[i - 1];
      right = sum - nums[i];
    } else if (left === right) {
      result = nums[i];
      // return result;
    }
  }
  console.log(left);
  console.log(right);
  console.log(sum);
  return result;
};

console.log(pivotIndex(nums));
