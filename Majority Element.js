let nums = [3, 2, 3];
const majorityEle = function (nums) {
  let obj = {};
  let majEle = 0;
  let maxFreq = 0;

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    console.log(obj);
  }
  for (num in obj) {
    console.log(obj["num"]);
    if (obj[num] > maxFreq) {
      maxFreq = obj[num];
      majEle = Number(num);
    }
  }
  return majEle;
};
