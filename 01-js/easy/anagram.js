/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g , '');
  str2 = str2.replace(/\s/g , '');
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  console.log(str1)
  console.log(str2)
  let str1arr = str1.split("");
  let str2arr = str2.split("");
  str1arr.sort();
  str2arr.sort();
  for(let i=0; i<str1arr.length; i++){
    if(str1arr[i]!=str2arr[i]){
      return false;
    }
  }
  return true;
}

console.log(isAnagram("Debit Card","Bad Credit"));

module.exports = isAnagram;
