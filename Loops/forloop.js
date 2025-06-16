// Print numbers from 1 to 10 using a `for` loop
//  2. Print the even numbers from 1 to 20
//  3. Print the multiplication table of any number (e.g., 5
//  4. Find the factorial of a number (e.g., 5! = 120)
//  5. Calculate the sum of numbers from 1 to `n`


//  1. Print numbers from 1 to 10 using a `for` loop
for (let i=1;i<=10;i++){
    console.log(i);
    
}


//  2. Print the even numbers from 1 to 20
for(i=1;i<=20;i++){
    if(i%2===0){
        console.log(i);
        
    }
}

//  3. Print the multiplication table of any number (e.g., 5)

let num=5;
let table;
for (let i=1;i<=10;i++){
      table  =num*i;
    console.log(table);
    
}

//  4. Find the factorial of a number (e.g., 5! = 120)

let fact=1;
let number=5;
for(let i=1;i<=number;i++){
    fact=fact*i;
}
console.log(fact);

//  5. Calculate the sum of numbers from 1 to `n`

function sum(n){
    let sum=0;
    for (let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

console.log(sum(7));
