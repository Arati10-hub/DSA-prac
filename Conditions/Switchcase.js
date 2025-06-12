// Days of the week
// Input a number (1–7) and print the corresponding day name.

let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("enter a valid input");
    break;
}


// Calculator
// Use switch to perform +, −, ×, ÷ operations based on the operator input.

let n1=10;
let n2=20;
let operator="*";

switch(operator){
  case "+":
    console.log(n1+n2);
    break;
  case "-":
    console.log(n1-n2);
    break;
  case "*":
    console.log(n1*n2);
    break;
  case "/":
    console.log(n1/n2);
    break;
  default:
    console.log("Invalid operator");
    break;
}


// Traffic signal
// Input one of "red", "yellow", or "green" and print the corresponding action.

let signal="green";
switch(signal){
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready to go");
    break;
    case "green":
      console.log("Go");
      break;
  default:
    console.log("Invalid signal");
    break;
      
    
}
// Grade message
// Based on grade A, B, C, D, or F, print the performance.

let grade="D";
switch(grade){
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Below Average");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
    break;
}

// Fruit price
// Input fruit name ("apple", "banana", "orange") and display the price.

let fruit = "banana";
switch (fruit){
  case "apple":
    console.log("Price: 200Rs per kg");
    break;
  case "banana":
    console.log("Price: 60Rs per dozen");
    break;
  case "orange":
    console.log("Price: 150Rs per kg");
    break;
  default:
    console.log("Fruit not available");
    break;
}