var btns = document.querySelectorAll('button')

// for (var i = 0; i < btns.length; i++) {
//     (function(i){
//         btns[i].onclick = function() {
//             console.log(i);
//         }
//     })(i)
// }

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        console.log(i);
    }
}