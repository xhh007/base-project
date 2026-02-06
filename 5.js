// 作用域
// 下面的代码输出什么

// console.log(a, b, c); // undefined undefined Function
// var a = 1;
// var b = function () {};
// function c() {}

// 下面的代码输出什么

// var a = 1,
//   b = 2;

// function m1() {
//   console.log(a); // undefined
//   var a = 3;
//   function m2() {
//     console.log(a, b); // 3, 2
//   }
//   m2();
// }

// m1();

// 下面的代码输出什么？(百度)

var a = 1;

function m1() {
  a++;
}

function m2() {
  var a = 2;
  m1();
  console.log(a); //2
}

m2();
console.log(a); //2
