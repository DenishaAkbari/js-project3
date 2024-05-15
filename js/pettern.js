// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// // //////
// let i = 1;
// let j = 1;
// let k = 1;
// let h5 = document.querySelector('h5');

// for(i = 1; i <= 5; i++){
//     for(j = 1; j <= i; j++){
//         h5.innerHTML += k;
//         k++;
//     }
//     h5.innerHTML += '<br>';
// }


// 5 
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1
//////////
// let p=1;
// let q=1;
// let h2 = document.querySelector('h2');
// for(p=5; p>=1; p--){
//     for(q=5; q>=p; q--){
//         h2.innerHTML += q;
//     }
//     h2.innerHTML += '<br>';
// }

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
//////////////////////
// let h3 = document.querySelector('h3');

// for(let i = 1; i <= 5; i++){
//     for(let j = 0; j < i; j++){
//         let ans = (i + j) % 2;
//         h3.innerHTML += ans;
//     }
//     h3.innerHTML += '<br>';
// }

// 1
// 4 1
// 9 4 1
// 16 9 4 1
// 25 16 9 4 1
// ///////////////////////
// let h6 = document.querySelector('h6');

// for(let i = 1; i <= 5; i++){
//     for(let j = i; j >= 1; j--){
//         let value = j * j;
//         h6.innerHTML += value;
//     }
//     h6.innerHTML += '<br>';
// }