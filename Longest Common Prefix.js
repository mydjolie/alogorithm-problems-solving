// const prefixArr = [];
// for (let i = 0; i <= strss.length; i++) {
//   console.log(strss[i]);
//   prefixArr.push(strss[i].slice(0, i + 1));
//   console.log(prefixArr);

// }
// console.log(prefixArr);
// for (let a = 0; a < prefixArr.length; a++) {
//   if (prefixArr[a] === prefixArr[a + 1]) {
//     return prefixArr[a];
//   } else {
//     return "";
//   }
// }

// --------------------------------
//
var strs = ["flower", "flow", "flight"];

// const result = strs.every(checkStart);
// console.log(result);

var longestCommonPrefix = function (strs) {
  let count = 0;
  let prefixStr = "";

  // const checkStart = (string) => {
  //   return string.startsWith(prefixStr);
  // };

  for (let i = 0; i < strs.length; i++) {
    prefixStr = prefixStr + strs[0].charAt(i);
    for (let j = strs.length - 1; j > 0; j--) {
      console.log(strs[j]);
      if (strs[j].startsWith(prefixStr)) {
        count++;

        console.log(prefixStr);
        console.log(count);
        return true;
      }
    }
  }
  return prefixStr;
};

console.log(longestCommonPrefix(strs));
