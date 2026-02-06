// 原型链
// toString方法属于Object.prototype，它会把对象转换为字符串的形式 [object Object]
// 这种格式并非每个对象想要的
// 1. 解释数组的toString为什么能得到不同的格式
// 2. 如果自己的构造函数希望改变toString，如何改变
// 1.
// console.log(Object.prototype.toString);
// console.log(Array.prototype.toString);
// console.log(Number.prototype.toString);
// console.log(Object.prototype.toString === Array.prototype.toString);
// console.log(Object.prototype.toString === Number.prototype.toString);
// 2.
// function User() {}
// User.prototype.toString = function() {
//     return '我是字符串'
// }
// var user = new User()
// var user1 = new User()
// console.log(user.toString())
// console.log(user1.toString())



var arr1 = [1, 2, 3, 4]; // 真数组
// // 类数组(伪数组)
// var arr2 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };
// // 判断arr1和arr2是否是真数组

// // Object.getPrototypeOf 获取对象的隐式原型
// console.log(Object.getPrototypeOf(arr1) === Array.prototype);
// console.log(Array.prototype === arr1.__proto__);
// console.log(Object.getPrototypeOf(arr2) === Array.prototype);

// // console.log(arr1.__proto__ === Array.prototype); // true
// // console.log(arr2.__proto__ === Array.prototype); // false
// // console.log(arr1 instanceof Array);
// // console.log(arr2 instanceof Array);



// 创建一个没有隐式原型的用户对象，随意添加一些属性
// var obj = {}
// obj.__proto__ = null
// console.log(obj);
// var obj1 = Object.create(null)
// console.log(obj1);
// var obj2 = {n:1}
// Object.setPrototypeOf(obj2, null)
// console.log(obj2)



// 下面的代码输出什么？
// function User() {}
// User.prototype.sayHello = function () {};

// var u1 = new User();
// var u2 = new User();

// console.log(u1.sayHello === u2.sayHello); // true
// console.log(User.prototype === Function.prototype); // false
// console.log(User.__proto__ === Function.prototype); // true
// console.log(User.__proto__ === Function.__proto__); // true
// console.log(u1.__proto__ === u2.__proto__); // true
// console.log(u1.__proto__ === User.__proto__); // false
// console.log(Function.__proto__ === Object.__proto__); // true
// console.log(Function.prototype.__proto__ === Object.prototype.__proto__); //false
// console.log(Function.prototype.__proto__ === Object.prototype); // true



// 下面的代码输出什么？（字节）
// console.log({} instanceof Object); // true
// console.log({}.toString instanceof Function); // true
// console.log(Object instanceof Function); // true
// console.log(Function instanceof Object); // true ※


// 下面的代码输出什么？（京东）
Function.prototype.a = 1;
Object.prototype.b = 2;

function A() {}

var a = new A();

console.log(a.a, a.b); // undefined 2
console.log(A.a, A.b); // 1, 2


