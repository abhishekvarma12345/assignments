/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strWithLetters = "";
  let reverse = "";
  let ascii = null;
  // remove characters that are not letters
  for(let i = 0; i < str.length; i++) {
    ascii = str[i].charCodeAt(0) ;
    if ((ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)){
      strWithLetters += str[i];
    }
  }
  // reverse the string and store it
  for (let i = strWithLetters.length; i >= 0  ; i--) {
    reverse += strWithLetters.charAt(i);
  }
  return reverse.toLowerCase() == strWithLetters.toLowerCase();
}

// console.log(isPalindrome("nab"))
module.exports = isPalindrome;
