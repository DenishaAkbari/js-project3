//3. Write a JavaScript program to check whether a number is an Armstrong number or not.
let sum = 0;
let number = 253;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}
if (sum == number) {
    document.querySelector('.pr3').innerHTML=`${number} is an Armstrong number`;
}
else {
    document.querySelector('.pr3').innerHTML=`${number} is not Armstrong number`;
}