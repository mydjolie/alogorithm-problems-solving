const s = "   fly me   to   the moon  ";
// Output: 5
// Explanation: The last word is "World" with length 5.
// const lengthOfLastWord = function (s) {
let filterOut = function (array) {
  return array !== "";
};

let sentence = s.split(" ").filter(filterOut);
console.log(sentence);
let lastWordLength = sentence[sentence.length - 1].length;

console.log(lastWordLength);
