// JavaScript Array Methods: 25 Coding Questions


//   Adding & Removing Elements.


//  1. Add the number 10 to the end of the array using push().
let numbers = [1, 2, 3, 4, 5];
let addLastElement=numbers.push(10);
console.log(addLastElement); 



//  2. Remove the last element from an array using pop().
let lastElement = numbers.pop();
console.log(lastElement);



//  3. Add 'start' to the beginning of the array using unshift().
let arr=['one', 'two', 'three'];
let addFirstElement = arr.unshift('start');
console.log(arr);


//  4. Remove the first element from an array using shift().
let firstElement = arr.shift();
console.log(firstElement);
console.log(arr);

//  5. Write a function addToEnd(arr, value) that adds a value to the end.
function addToEnd(arr, value) {
    arr.push(value);
    return arr;
}
console.log(addToEnd(['start'], 'end'));



//  6. Write a function removeFromEnd(arr) that removes and returns the last item.
function removeFromEnd(arr) {
    return arr.pop();
}
console.log(removeFromEnd(['start', 'end']));

//  7. Write a function addToStart(arr, value) that adds a value to the beginning.
function addToStart(arr, value) {
    arr.unshift(value);
    return arr;
}
console.log(addToStart(['end'], 'start'));
//  8. Write a function removeFromStart(arr) that removes and returns the first item.
function removeFromStart(arr) {
    return arr.shift();
}
console.log(removeFromStart(['start', 'end']));
//  9. Create a new array and add 5 elements to it one by one using push().
let newArray = [];
newArray.push('apple');
newArray.push('banana');
newArray.push('cherry');
newArray.push('mango');
newArray.push('lichi');
console.log(newArray);


//  10. Use unshift() to add 3 items to the start of an array.

newArray.unshift('grapes', 'orange', 'kiwi');
console.log(newArray);
//  11. Remove both the first and last items from an array and return the new array.
function removeFirstAndLastEle(arr) {
    arr.shift();
    arr.pop();
    return arr;
}
console.log(removeFirstAndLastEle(['grapes', 'orange', 'kiwi', 'apple', 'banana']));



//  12. Add an element at the start and end of an array and print it.
function addElementAtStartAndEnd(arr, startValue, endValue) {
    arr.unshift(startValue);
    arr.push(endValue);
    return arr;
}
console.log(addElementAtStartAndEnd(['apple', 'banana'], 'orange', 'kiwi'));



//  13. Build a function that clears an array using shift() or pop() in a loop.
function clearArray(arr) {
    while (arr.length > 0) {
        arr.pop(); 
    }
    return arr;
}
console.log(clearArray(['apple', 'banana', 'cherry']));



