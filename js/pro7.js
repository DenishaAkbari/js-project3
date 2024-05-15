var n = 1729;
var templete = n;
var rev = 0;
var sumOfDigits = 0;
let pr7 = document.querySelector('.pr7');

while (templete > 0) {
    sumOfDigits = sumOfDigits + templete % 10;
    templete = templete 
    templete = (templete / 10) | 0; 
}

templete = sumOfDigits; 

while (templete > 0) {
    rev = rev * 10 + templete % 10;
    templete = templete 
    templete = (templete / 10) | 0; 
}


if (rev * sumOfDigits === n) {
    pr7.innerHTML+=(n + " is a Magic Number.");
} else {
    pr7.innerHTML+=(n + " is not a Magic Number.");
}

		