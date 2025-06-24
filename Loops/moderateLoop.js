// Write a function that takes a string as input and returns an object showing the frequency of each
// character.
// Example Input:
// countChars("hello world");
// Expected Output:
// { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
function countChar(str) {
  const charCount = {};
  let char;
  for (i = 0; i < str.length; i++) {
    char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

console.log(countChar("hello world"));

// 2. Remove Duplicates from an Array (without Set)
// Problem:
// Write a function that removes duplicate values from an array using only loops (do NOT use Set,
// filter, or includes).
// Example Input:
// removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
// Expected Output:
// [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }


  let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
          result.push(arr[i]);
        }
      }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// 3. Reverse Words in a Sentence
// Problem:
// Write a function that reverses the order of words in a sentence, not the characters.
// Example Input:
// reverseWords("JavaScript is fun");
// Expected Output:
// "fun is JavaScript"

function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed = reversed + words[i] + " ";
  }
  return reversed;
}

console.log(reverseWords("JavaScript is fun"));
