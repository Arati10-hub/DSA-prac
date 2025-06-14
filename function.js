// Easy Level

// Write a function that returns the square of a number.

function square(num) {
  return num * num;
}

console.log(square(5));

// write a function to check whether a number is even or odd.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(23));

// write a function that converts a string to uppercase.

function upperCase(str) {
  return str.toUpperCase();
}

console.log(upperCase("arati lachure"));

// Write a function to find the maximum of two numbers.

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(max(10, 50));

// write a function calculates the sum of all elements in an array.

let arr = [1, 2, 3, 4, 5];

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+=  arr[i];
  }
  return sum;
}

console.log(sumArr(arr));

// Medium Level

// write a function that filters and return even numbers from an array.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEven(arr1) {
  let evenArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      evenArr.push(arr1[i]);
    }
  }

  return evenArr;
}
console.log(filterEven(arr1));

// write a function that reverses a string.
function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("JavaScript"));

// write a function that checks if a string is a palindrome.
function isPalindrome(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  console.log(reversedStr);

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }

  // return reversedStr;
}

console.log(isPalindrome("madam"));

// write a function that returns a new array with each element doubled.

function doubleArray(arr) {
  let doubledArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(arr[i] * 2);
  }
  return doubledArr;
}
console.log(doubleArray([1, 2, 3, 4, 5]));

// Hard Level

// Write a function that returns another function using clousre.


function outer() {
  var a = 110;
  function inner() {
    console.log(a);
  }
  inner();
}


outer();

