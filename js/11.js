// 标准库  Number String Math Date
// -2 -1 0 1 2
// parseInt  向0取整   parseInt(-1.9) -1
// Math.ceil 向上取整  Math.ceil(-1.9) -1
// Math.floor 向下取整 Math.floor(-1.9) -2
// Math.max.apply(null, [1,2,3])


// // 生成一个a-z的字符串  a:97
// var str = ''
// for(var i = 'a'.charCodeAt(0); i<'z'.charCodeAt(0); i++) {
//   // for(var i = 97; i<97+26-1; i++) {
//   str += String.fromCharCode(i)
// }
// console.log(str);


// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.
// var str =
//   'Lo...re,m, ips.um dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';

// var arr = str.split(' ')
// console.log(arr);

// for(var i=0; i<arr.length; i++) {
//   arr[i] = arr[i].replaceAll(',', '').replaceAll('.', '') // 浏览器环境中可用，node环境报错
//   // arr[i] = arr[i].replace(/\,/g, '').replace(/\./g, '') // 都支持
// }
// console.log(arr);


// // 得到下面字符串中第一个i和最后一个i之间的子串

// var str =
//   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';

// var fIndex = str.indexOf('i')
// var lIndex = str.lastIndexOf('i')
// var s = str.substring(fIndex+1, lIndex)
// console.log(s);



// // 将下面的rgb格式转换成为HEX格式
// var rgb = 'rgb(253, 183, 25)';
// var rgb1 = 'rgb(15, 15, 25)';
// function change(rgb) {
//   var arr = rgb.split('(')[1].split(')')[0].split(',')
//   for(var i=0;i<arr.length;i++) {
//     arr[i] = (+arr[i]).toString(16).toUpperCase().padStart(2, '0')
//   }
//   return '#'+arr.join('')
// }

// console.log(rgb, change(rgb));
// console.log(rgb1, change(rgb1));


// // name转换成驼峰命名
// var name1 = 'has own property'; // --> hasOwnProperty

// var arr = name1.split(' ')
// for(var i=0;i<arr.length;i++) {
//   arr[i] = i===0?arr[i]:arr[i][0].toUpperCase()+arr[i].substring(1)
// }

// console.log(arr.join(''));


/**
 * 得到一个指定范围内的随机整数
 * @param {number} min 范围的最小值
 * @param {number} max 范围的最大值（无法取到最大值）
 * @return {number} 范围内的随机整数
 */
function getRandom(min, max) {
  var num = Math.random() * (max-min) + min
  return Math.floor(num)
}



/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */
function getRandomString(length) {
  var result = ''
  var all = '0123456789abcdefghijklmnopqrstuvwxyz'
  for(var i=0; i<length; i++) {
    let s = all[getRandom(0, all.length)]
    result+=s
  }
  return result
  // return Math.random().toString(36).substring(2, length).padEnd(length, '0')
}
// console.log(getRandomString(15));



/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
  var index = getRandom(0, arr.length)
  return arr[index]
}

// var item = getRandomItem([0,1,2,3,4,5,6,7,8,9])
// console.log(item);

/**
 * 将日期格式化为字符串
 * @param {Date} date 要格式化的日期对象
 * @param {string} format 格式化字符串 yyyy-年  MM-月  dd-日 HH-小时 mm-分钟 ss-秒 ms-毫秒
 * @return {string} 日期字符串
 */

function fomatterDate(date, format) {
  function pad(s, len) {
    return s.toString().padStart(len, '0')
  }
  var y = pad(date.getFullYear(), 4)
  var month = pad(date.getMonth() + 1, 2)
  var d = pad(date.getDay(), 2)

  var h = pad(date.getHours(), 2)
  var m = pad(date.getMinutes(), 2)
  var s = pad(date.getMinutes(), 2)
  var ms = date.getMilliseconds()
  return format.replace('yyyy', y).replace('MM', month).replace('dd', d)
  .replace('HH', h).replace('mm', m).replace('ss', s).replace('ms', ms)
}
console.log(fomatterDate(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒ms毫秒'));
console.log(fomatterDate(new Date(), 'yyyy-MM-dd HH:mm:ss:ms'));
console.log(fomatterDate(new Date(), 'yyyy/MM/dd'));

