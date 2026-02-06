/**
 * 得到某个数的阶乘,输入小于1的数返回0
 * @param {number} n - 要计算的数
 * @return {number} - 阶乘结果
 */
function getFactorial(n) {
  if(n < 1) return 0;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// 3 的阶乘是 1*2*3 = 6
console.log(getFactorial(-1));
// 求 5和6的阶乘的和
console.log(getFactorial(5) + getFactorial(6));
// 输出阶乘结果不超过1000 的所有数
let arr = []
for (let i = 1; i <= 1000; i++) {
  if (getFactorial(i) <= 1000) {
    arr.push(i);
  } else {
    break;
  }
}
console.log(arr);
