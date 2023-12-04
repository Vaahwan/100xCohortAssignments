/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/\s/g , '');  //to remove any special characters
  str = str.replace(/\W/g, '');   // to remvoe any space between characters
  let n = str.length;
  for(let i=0; i<n/2; i++){
    if(str.charAt(i)!=str.charAt(n-i-1)){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Eva, can I see bees in a cave?"))

module.exports = isPalindrome;
