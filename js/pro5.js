var de = 100;
var li = 0, mi = 1, result;
let pr5 = document.querySelector('.pr5');

while (mi <= de) {

    pr5.innerHTML += +mi + '<br>';

    result = li + mi;
    li = mi;
    mi = result;
}
pr5.innerHTML += '<br>';