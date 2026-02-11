// 原型prototype，其实是函数中的一个属性，是一个对象

// 构造函数 （帮我们创建对象）
function Person(name, age) {
  // var obj = {}
  this.name = name
  this.age = age
  this.sayHi = function () {
    console.log(`你好，我是${this.name}今年${this.age}岁`);
  }
  // return obj
}
var p1 = new Person('于浪浪', 18)
var p2 = new Person('张贝贝', 32)
console.log(p1.sayHi === p2.sayHi); // 每个实例各自有一个sayHi函数，没必要，是内存空间的浪费

// 用原型来解决这个问题  函数中都有prototype。一般只有构造函数使用prototype，实例中有隐式原型__proto__
// 实例的隐式原型__proto__指向（就是）构造函数的prototype
console.log(p1.__proto__ === Person.prototype);
