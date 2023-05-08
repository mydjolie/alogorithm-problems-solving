const nums = [3, 2, 2, 3];
const val = 3;

var removeElement = function (nums, val) {
  nums = nums.sort();
  let count = Number(0);

  for (num of nums) {
    if (num === val) {
      count++;
    }
  }
  let index = nums.indexOf(val);
  nums.splice(index, count);
  return nums;
};
console.log(removeElement(nums, val));
