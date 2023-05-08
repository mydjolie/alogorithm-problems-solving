// const romanToInt = function (s) {
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I" && s[i + 1] !== "V" && s[i + 1] !== "V") {
//       console.log("3");
//       total = total + 1;
//     } else if (s[i] === "I" && s[i + 1] === "V") {
//       total = total + 4;
//     } else if (s[i] === "I" && s[i + 1] === "X") {
//       console.log("3");
//       total = total + 9;
//     }
//   }
//   return total;
// };

// console.log(romanToInt("IX"));

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

// console.log(mouse.bird.size);
console.log(mouse[bird.size]);
console.log(mouse[bird["size"]]);

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();

let lengthOfLastWord = function (s) {
  console.log(s);
  console.log(s.split(" "));
  let sArr = s.split(" ");
  console.log(sArr);
  if (sArr.length === 0) {
    return 0;
  } else {
    return sArr[sArr.length - 1].length;
  }
};

console.log(lengthOfLastWord("Techup Thailand"));
