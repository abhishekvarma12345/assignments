/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let strLower = str.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let i = 0; i < strLower.length; i++) {
      if (vowels.includes(strLower[i])) {
        count += 1;
      }
    }
    return count;
}

// console.log(countVowels('EaSiEr'))
module.exports = countVowels;