var add = 0;
var result = "";
let pr12 = document.querySelector('.pr12');

for (var i = 1; i <= 10; i++) {
    add += i * i;

    result += i * i;

    if (i < 10) {
        result += "+";
    }
}

pr12.innerHTML = result + " = " + add;
// console.log(result + " = " + sum);

