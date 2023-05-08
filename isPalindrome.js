// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let s = "race a car";

let arr = [];

let sentence = s.replace(/[^a-z0-9]/gi, "");
console.log(sentence);

let word = sentence.split("");

let theJoined = word.join("").toLowerCase();

let theReversed = word.reverse().join("").toLowerCase();

if (theJoined === theReversed) {
  return true;
} else {
  return false;
}

// const filterOut = function () {};
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] !== " " && sentence[i] !== "," && sentence[i] !== ":") {
//     arr.push(sentence[i]);
//   }
// }
// console.log(arr);
// let word = arr.join("").toLowerCase();
// let reversed = arr.reverse().join("").toLowerCase();
