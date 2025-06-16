//  1. Print numbers from 1 to 10 using `while` loop
//  2. Print all odd numbers between 1 and 20
//  3. Print a countdown from 10 to 1
//  4. Find the sum of digits of a number (e.g., 123 => 6)
//  5. Reverse a given number using while loop (e.g., 1234 => 4321)



//  1. Print numbers from 1 to 10 using `while` loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
    
}

//  2. Print all odd numbers between 1 and 20

i=1;
while(i<=20){
    if(i%2===1){
        console.log(i);
        
    }
    i++;
}

//  3. Print a countdown from 10 to 1

i=10;
while(i>=1){
    console.log(i);
    i--;
}

//  4. Find the sum of digits of a number (e.g., 123 => 6)

function sumDigits(num){
    let sum=0;
    let lastDigit;
    while(num>0){
        lastDigit=num%10;
        sum =sum+lastDigit;
        num=Math.floor(num/10);
    
    }

    return sum;
}

console.log(sumDigits(123));



//  5. Reverse a given number using while loop (e.g., 1234 => 4321)

function reverse(num) {
    let rev=0;
    while(num>0){
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);

    }
    return rev;
}

console.log(reverse(1234));