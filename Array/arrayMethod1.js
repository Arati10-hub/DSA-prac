// Q1. Add 'orange' to the end of the array:
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

// Q2. Remove the last item from this array:
let colors = ["red", "green", "blue"];
colors.pop();
console.log(colors);

// Q3. Add 'Monday' at the start of the array:
let days = ["Tuesday", "Wednesday"];
days.unshift("Monday");
console.log(days);

// Q4. Remove the first element from this array:
let queue = [1, 2, 3, 4];
queue.shift();
console.log(queue);

// Q5. Perform these steps:
// - Start with []
// - Add 'A'
// - Add 'B' at beginning
// - Remove last item
let arr = [];
arr.push("A");
arr.unshift("B");
arr.pop();
console.log(arr);

// Q6. What will this output?
// let x = [10, 20, 30];
// x.pop();
// x.shift();
// console.log(x);
let x = [10, 20, 30];
x.pop();
x.shift();
console.log(x);

// Q7. Add multiple elements 'pen', 'pencil' to end of array:
let items = ["book"];
items.push("pen", "pencil");
console.log(items);

// Q8. Add 100, 200 at beginning of array:
let nums = [300, 400];
nums.unshift(100, 200);
console.log(nums);

// Q9. Remove two items from beginning and print removed:

let data = ["x", "y", "z"];
let removed = data.shift();
removed = data.shift();
console.log(removed);

// Q10. Push an element and immediately remove it:
let list = ["hello"];
list.push("javascript!");
let removedItem = list.pop();
console.log(removedItem);
console.log(list);
