// Voting booth assignment

let user = prompt("Enter your name: ");

if(user==="a" || user==="b" || user==="c" || user==="d" || user==="e" || user==="f") {
    console.log("You can vote on booth 1");
}

else if(user==="g" || user==="h" || user==="i" || user==="j" || user==="k" || user==="l") {
    console.log("You can vote on booth 2");
}

else if(user==="m" || user==="n" || user==="o" || user==="p" || user==="q" || user==="r") {
    console.log("You can vote on booth 3");
}

else if(user==="s" || user==="t" || user==="u" || user==="v" || user==="w" || user==="x") {
    console.log("You can vote on booth 4");
}

else if(user==="y" || user==="z") {
    console.log("You can vote on booth 5");
}

else {
    console.log("Invalid user name. Please enter a valid name.");
}
