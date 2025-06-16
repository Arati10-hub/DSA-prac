// palindrome number

function isPalindrome(num) {
  let originalNum = num;
  let lastDigit;
  let rev = 0;

  while(num>0){
    lastDigit = num % 10;
    rev = rev*10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return originalNum === rev;
}

console.log(isPalindrome(121));
