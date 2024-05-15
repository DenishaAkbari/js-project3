
// 14.Write a JAVASCRIPT Program that displays below pattern using nested for loop:
let i = 1;
let j = 1;
let k = 1;
let pr14 = document.querySelector('.pr14')

for (i = 1; i <= 5; i++) { 
    for (j = 1; j <= i; j++) {
        pr14.innerHTML += k; 
        k++;
    }
    pr14.innerHTML +=("<br>");
}