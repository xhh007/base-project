// 构造函数
// var person = {
//   firstName: '张',
//   lastName: '小子', 
// }
// person.fullName = person.firstName+person.lastName
// person.sayHi = function () {
//   console.log(`你好，我是${person.fullName}`);
// }
// console.log(person.fullName);
// person.sayHi()

// 如果有好多人呢？提一个方法出来
// function createPerson(firstName, lastName) {
//   var obj = {}
//   obj.firstName = firstName
//   obj.lastName = lastName
//   obj.fullName = firstName+lastName
//   obj.sayHi = function () {
//     console.log(`你好，我是${obj.fullName}`);
//   }
//   return obj
// }
// createPerson('于', '浪浪').sayHi()
// createPerson('张', '贝贝').sayHi()

// 简化为 构造函数 大驼峰命名（帮我们创建对象）
// function Person(firstName, lastName) {
//   // var obj = {}
//   this.firstName = firstName
//   this.lastName = lastName
//   this.fullName = firstName+lastName
//   this.sayHi = function () {
//     console.log(`你好，我是${this.fullName}`);
//   }
//   // return obj
// }
// new Person('于', '浪浪').sayHi()
// new Person('张', '贝贝').sayHi()

// js所有的对象都是通过构造函数产生的
// var obj1 = {n:1} 
// // 本质上是
// var obj2 = new Object()
// obj2.n = 1
// // 数组同理
// var arr1 = [1,2,3] 
// // 本质上是
// var arr2 = new Array(1,2,3)
// // 函数同理 
// function sum1(a,b) {return a+b}
// // 本质上是
// var sum2 = new Function('a', 'b', 'return a+b')

/* 
练习 利用构造函数创建一幅扑克牌
规则：
‌四种花色‌：1黑桃、2红桃、3梅花、4方块
‌每种花色13张‌：1（A）至10，11 J、12 Q、13 K
‌两张副牌‌：14 Joker 大王、15 joker 小王


Pocker 一张牌 number, color
Deck 一副牌 
*/

function Pocker(number, color) {
  this.number = number
  this.color = color
}
Pocker.prototype.print = function() {
  if (this.number === 14) {
    console.log('JOKER');
    return
  }
  if (this.number === 15) {
    console.log('joker');
    return
  }
  var colors = ['♠', '♥', '♣', '♦']
  var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  
  var color = colors[this.color - 1]
  var number = numbers[this.number - 1]
  console.log(color, number);
}

function Deck() {
  this.prokers = []
  for (var i = 1; i<=13; i++) {
    for(var j=1; j<=4; j++) {
      this.prokers.push(new Pocker(i, j))
    }
  }
  this.prokers.push(new Pocker(14))
  this.prokers.push(new Pocker(15))
}
Deck.prototype.print = function() {
  for (let index = 0; index < this.prokers.length; index++) {
    const element = this.prokers[index];
    element.print()
  }
}
console.log(new Pocker(1,1));

// new Deck().print()
