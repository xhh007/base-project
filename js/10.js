// 继承
// 普通会员的构造函数
// function User(username, password){
//   this.username = username;
//   this.password = password;
// }
// User.prototype.playFreeVideo = function(){
//   console.log('观看免费视频')
// }

// // VIP会员的构造函数
// function VIPUser(username, password, expires){
//   this.username = username;
//   this.password = password;
//   this.expires = expires;
// }
// VIPUser.prototype.playFreeVideo = function(){
//   console.log('观看免费视频')
// }
// VIPUser.prototype.playPayVideo = function(){
//   console.log('观看付费视频')
// }

// 有重复，怎么处理？
// 普通会员的构造函数
function User(username, password){
  this.username = username;
  this.password = password;
}
User.prototype.playFreeVideo = function(){
  console.log(this.username, '观看免费视频')
}

// VIP会员的构造函数
function VIPUser(username, password, expires){
  User.call(this, username, password)
  this.expires = expires;
}
Object.setPrototypeOf(VIPUser.prototype, User.prototype)
VIPUser.prototype.playPayVideo = function(){
  console.log(this.username, '观看付费视频')
}
var user = new User('普通')
var vip = new VIPUser('尊贵')
user.playFreeVideo()
vip.playFreeVideo()
vip.playPayVideo()