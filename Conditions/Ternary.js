//  Even or odd (one-liner)
// Use ternary to check if a number is even or odd.

let number=5;
let output=(number%2===0)?"Even": "Odd";
console.log(output);


// Vote eligibility
// Print "Eligible" or "Not eligible" based on age in a single line.

let age=25;
let eligibility=(age>=18)?"Eligible": "Not Eligible";
console.log(eligibility);

// Check login
// If isLoggedIn is true, print "Welcome" else "Please login".

let isLoggedIn=true;
let status=isLoggedIn?"Welcome":"Login Please";
console.log(status);


// Temperature check
// If temp > 30, print "Hot" else "Pleasant" using ternary.
let temp=38;
let weather=temp>30?"Hot":"Pleasant";
console.log(weather);

// Pass/Fail
// If marks are 40 or above, print "Pass" else "Fail" in one line.
let marks=45;
let result=(marks>=40)?"Pass":"Fail";
console.log(result);