// JavaScript Array Coding Questions (Easy, Medium, Hard)
//  Easy Level Questions:




//  1. Reverse an array without using reverse() method.
// let arr=[1,2,3,4,5]
// for (let i=arr.length;i>=0;i--){
//     console.log(arr[i]);
// }

//  2. Find the length of an array.
// let arr=[1,2,3,4,5]
// let length=arr.length
// console.log(length);


//  3. Add a new element to the beginning of an array.
// let arr=[1,2,3,4,5]
// let newEle=arr.unshift(0);
// console.log(arr);

//  4. Remove the last element from an array.
// let arr=[1,2,3,4,5]
// let removeLastEle=arr.pop();
// console.log(arr);

//  5. Check if an element exists in an array.
// let arr=[1,2,3,4,5]
// let eleCheck=arr.includes(3)
// console.log(eleCheck);

//  6. Join all elements of an array into a single string.
// let arr=["Hii","I","am","javascript"]
// let str=arr.join('')

// console.log(str);


//  7. Sort an array of numbers in ascending order.
let arr=[2,6,5,1,4,3]

for(j=0;j<=arr.length;j++){
    for(i=0;i<=arr.length;i++){
    let temp;
    if(arr[i+1]<arr[i]){
        temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp

    }
   
}
j++;
}


console.log(arr);





//  8. Find the first even number in an array.
// let num=[2,6,5,1,4,3]
// let isEven=num.filter((item)=>{
//     return item%2===0
// })

// console.log(isEven[0]);


//  9. Convert a string to an array using split().
// let str="Hello World";
// let arr=str.split(' ')
// console.log(arr);


// //  10. Clone an array without modifying the original.
// let fruits=["Apple","Banana","Orange","Mango","Berry"]
// let newFruits=[...fruits]
// console.log(newFruits);


//  Medium Level Questions:
//  11. Remove all duplicate elements from an array.
//  12. Find the second largest number in an array.
//  13. Find all even numbers in an array.
//  14. Merge two arrays and remove duplicates.
//  15. Rotate an array to the right by k positions.
//  16. Find the intersection of two arrays.
//  17. Flatten a nested array (1 level deep).
//  18. Group array elements by their type (string, number, boolean, etc).
//  19. Count how many times each element appears in an array.
//  20. Find the sum of all values in an array using reduce().
//  Hard Level Questions:
//  21. Find the longest increasing subsequence in an array.
//  22. Deeply flatten a multi-level nested array.
//  23. Implement a function that returns the difference between two arrays.
//  24. Find all pairs in an array whose sum equals a given number.
//  25. Shuffle an array randomly.
//  26. Write a custom implementation of the map() method.
//  27. Remove falsy values (false, 0, "", null, undefined, NaN) from an array.
//  28. Chunk an array into smaller arrays of a specified size.
// 29. Find the maximum product of any two numbers in an array.
//  30. Find the most frequent element in an array.