// this
// 1.
// var person1 = {
//   name: 'monica',
//   age: 17,
//   sayHi: function () {
//     // 完成该方法，打印姓名和年龄
//     console.log(`你好，我是${this.name}今年${this.age}岁`);
//   },
// };

// person1.sayHi()

// var person2 = {
//   name: 'rose',
//   age: 18,
// }
// // 方法1：赋值
// // person2.sayHi = person1.sayHi
// // person2.sayHi()
// // 方法2：call
// person1.sayHi.call(person2)



// 2为所有对象添加方法print，打印对象的键值对
// var obj1 = {n:1,m:2}
// var arr1 = [1,2,3]
// var arr2 = new Array(1,2,3)
// var fun1 = function () { return 999 }

// var num = 34
// var str = 'wqr'
// var bl = true
// var n = null
// var u = undefined
// Object.prototype.print = function () {
//   // for(var key in this) {
//   //   if (this.hasOwnProperty(key)) {
//   //     console.log(key, this[key]);
//   //   }
//   // }
//   console.log('---********---', this);
// }

// num.print()
// str.print()
// bl.print()
// // n.print()  // 这个没有
// // u.print()  // 这个没有

// obj1.print()
// arr1.print()
// // arr2.print()
// fun1.print()


// 能否不使用new，通过User函数创建对象（不能更改User函数）
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;
}

var obj1 = {}
User.call(obj1, '张', 'beibei')
console.log(obj1);
var obj2 = {}
User.apply(obj2, ['于', 'langlang'])
console.log(obj2);
var obj3 = {
  createName: User
}
obj3.createName('zhang', 'haha')
console.log(obj3);

