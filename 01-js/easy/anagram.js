/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1Lower = str1.toLowerCase();
  let str2Lower = str2.toLowerCase();
  let charCount = {}
  // for(let i=0; i < 26; i++){
  //   charCount[String.fromCharCode(97 + i)] = 0;
  // }
  
  for (let char of str1Lower) {
    if (!charCount[char]){
      charCount[char] = 1;
    }
    else {
      charCount[char] += 1;
    }
    
  }

  for (let char of str2Lower) {
    if (!charCount[char]){
      charCount[char] = -1;
    }
    else{
      charCount[char] -= 1;
    }
  }
  // console.log(charCount)
  for (let value of Object.values(charCount)) {
    if (value != 0){
      return false
    }
  }
  return true
}

// console.log(isAnagram('Debit Card', 'Bad Credit'))
module.exports = isAnagram;
