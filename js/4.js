// 数据的运算
/* 
编写一个完美的求和函数：
1. 若两个数据都是普通数字，求和即可
2. NaN的数据需要变为0
3. 其他类型的数据需要转换为数字
*/

function sum(a, b) {
  // code here
  let a1 = isNaN(a) ? 0 : +a
  let b1 = isNaN(b) ? 0 : +b
  
  return a1+b1
}
// console.log(sum({}, '7'));

/* 
  不使用if，判断一个年份是否是闰年，输出是或否

  闰年规则：
  1. 4年一闰，百年不闰
  2. 400年必闰
  上述两点满足其一即可
*/

// 判断变量year是否是闰年
function isRun(year) {
  let res = year%4 === 0 && year%100!==0 || year%400 === 0
  return res?'是':'否'
}
var year = 1904;
// console.log(isRun(year));

/* 
  不使用if
  根据身高、体重，计算健康状况

  健康状况取决于BMI   BMI=体重÷身高的平方。（体重单位：千克；身高单位：米。）
  BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖

  输出 正常、偏瘦、偏胖
*/

function getBMI(weight, height) {
  let val = weight/((height/100)**2)
  return val>=20 && val<=25?'正常':val<20?'偏瘦':'偏胖'
}
var height = 159, // 身高（厘米）
  weight = 66; // 体重（千克）
console.log(getBMI(weight, height));
