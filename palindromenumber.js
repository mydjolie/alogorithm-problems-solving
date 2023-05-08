const isPalindrome = function (x) {
  const reversed = x.toString().split("").reverse().join();
  const original = x.toString().split("").join();

  if (original === reversed) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
