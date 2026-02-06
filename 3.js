// 数据的存储和传递
// 输出什么
// 3
var foo = { bar: 1 };
var arr1 = [1, 2, foo];
var arr2 = arr1.slice(1);
arr2[0]++;
arr2[1].bar++;
foo.bar++;
arr1[2].bar++;
console.log(arr1[1] === arr2[0]); //2===3 false
console.log(arr1[2] === arr2[1]); //addr1===addr1 true
console.log(foo.bar); // 4
// 解析
// foo: addr1
// arr1: addr2
// arr2: addr3


// addr1 {bar: 4}
// addr2 {
//   0: 1,
//   1: 2,
//   2: addr1
// }
// addr3 {
//   0: 3,
//   1: addr1
// }





// 2
var foo = {
  n: 1,
};

var arr = [foo];

function method1(arr) {
  var bar = arr[0];
  arr.push(bar);
  bar.n++;
  arr = [bar];
  arr.push(bar);
  arr[1].n++;
}
function method2(foo) {
  foo.n++;
}
function method3(n) {
  n++;
}
method1(arr);
method2(foo);
method3(foo.n);

console.log(foo.n, arr.length); 

// 解析
// foo: addr1
// arr: addr2

// addr1 {
//   n: 4
// }
// addr2 {
//   0: addr1
//   1: addr1
// }

// 1
// var foo = {
//   n:0,
//   k: {
//     n: 0
//   }
// }
// var bar = foo.k
// bar.n++
// bar = {
//   n: 10
// }
// bar = foo
// bar.n++
// bar = foo.n
// bar++
// console.log(foo.n, foo.k.n); // 1,1
