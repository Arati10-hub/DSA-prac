// JavaScript Coding Questions: Accessing & Searching


//  1. Check if the array contains the number 7 using includes().
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.includes(7)); 



//  2. Write a function isFruitAvailable(fruit) that returns "Available" if the fruit is in the array, otherwise "Not Available".

function isFruitAvailable(fruit) {
    const fruits = ["apple", "banana", "orange", "grape"];
    return fruits.includes(fruit) ? "Available" : "Not Available";
}

console.log(isFruitAvailable("banana"));
console.log(isFruitAvailable("kiwi"));   

//  3. Find the first index of the string "blue" in an array using indexOf().

const colors = ["red", "green", "blue", "yellow", "blue"];
console.log(colors.indexOf("blue")); 



//  4. Write a function that returns true if "admin" exists in the roles array using indexOf().
function isAdminExists(roles) {
    if(roles.indexOf("admin")){
        return true;
    }
}
const roles = ["user", "editor", "admin", "guest"];
console.log(isAdminExists(roles));


//  5. Get the last index of the number 5 in an array using lastIndexOf().
const numbers = [1, 2, 3, 4, 5, 6, 5, 7, 8, 5];
console.log(numbers.lastIndexOf(5));


//  6. Count how many times the string "apple" appears in an array using lastIndexOf() and a loop.
// function countAppleOccurrences(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "apple") {
//             count++;
//         }
//     }
//     return count;
//   }
// const fruitsArray = ["apple", "banana", "apple", "orange", "apple"];
// console.log(countAppleOccurrences(fruitsArray));
// console.log(countAppleOccurrences(fruitsArray.lastIndexOf("apple"))); 






//  7. Print the element at index 3 using the at() method.
const numArray = [10, 20, 30, 40, 50];
console.log(numArray.at(3)); 


//  8. Get the last element of an array using at().
const num = [10, 20, 30, 40, 50];
console.log(num.at(-1));
//  9. Get the second last element of an array using at().
console.log(num.at(-2));


//  10. Write a function findValuePosition(arr, val) that returns an object with:
//     { found: true/false, firstIndex: index, lastIndex: index }
//     Use includes(), indexOf(), and lastIndexOf().
function findValuePosition(arr, val) {
    let found = arr.includes(val);
    let firstIndex = arr.indexOf(val);
    let lastIndex = arr.lastIndexOf(val);
    return { found, firstIndex, lastIndex };
}
const arrr = [1, 2, 3, 4, 5, 3, 6];
console.log(findValuePosition(arrr, 3));


