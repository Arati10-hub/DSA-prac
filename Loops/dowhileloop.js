//  do...while Loop - 5 Practice Questions
//  1. Print numbers from 1 to 5 using `do...while` loop
//  2. Repeat asking the user for a password until it's correct
//  3. Print a message (like "Welcome!") exactly 3 times
//  4. Create a simple menu system (e.g., 1. Start, 2. Exit) that runs until user chooses Exit
//  5. Print the squares of numbers from 1 to 5

//  1. Print numbers from 1 to 5 using `do...while` loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//  2. Repeat asking the user for a password until it's correct


let correctpass = "pass@123";
let userpass;
do {
  userpass = prompt("enter a password");
  if (userpass === correctpass) {
    console.log("Password is correct");
  } else {
    console.log("Incorrect password, try again");
  }
} while (userpass !== correctpass);



//  3. Print a message (like "Welcome!") exactly 3 times

let n = 1;
do {
    console.log("Welcome!");
    n++;
} while(n <= 3);


//  4. Create a simple menu system (e.g., 1. Start, 2. Exit) that runs until user chooses Exit



let chooses;
do{
    chooses=prompt("Choose an option: start or exit");
    if(chooses==="start"){
        console.log("You choose to start with menu...");
        
    }else if(chooses==="exit"){ {
        console.log("You successfully exited from menu");
    }
    }else{
        console.log("Invalid option, please choose again");
    }
    
}while(chooses !=="exit");



//  5. Print the squares of numbers from 1 to 5

let num=1;
do{
    console.log(`${num} X ${num}=`,num * num);
    num++;
    
}while(num <= 5);


