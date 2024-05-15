var total = 0;
var currentNumber = 0;
let pr9 = document.querySelector('.pr9');
do {
    total += currentNumber;
    currentNumber++;
} while (currentNumber <= 30);

var result = total;

// console.log("The sum of integers between 0 and 30 is:", result);
    pr9.innerHTML += result;