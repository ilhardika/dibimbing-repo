const palindrome = (str) => {
  realString = str.split("").join("");
  reverseString = str.split("").reverse().join("");
  return realString === reverseString ? true : false;
};
console.log(palindrome("katak"));
console.log(palindrome("sukses"));
