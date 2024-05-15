
let b=1;
let no= 5;
let fact = 1;
let pr2 = document.getElementById('pr2');

while(b<=no)
{
  fact = fact*b;
  b++;
}
pr2.innerHTML += (`Factorial of ${no} is ${fact}`)