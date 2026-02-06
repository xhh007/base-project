// 数据的流程切割
/**
 * 在arr中寻找是否存在target,存在返回true,不存在返回false
 * @param {number[]} arr - 要搜索的数组
 * @param {number} target - 要搜索的值
 * @return {boolean} - 是否存在
 */
function findTarget(arr, target) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === target) {
      return true
    }
  }
  return false
  // let isFind = false
  // for (let i=0; i<arr.length; i++) {
  //   if (arr[i] === target) {
  //     isFind = true
  //     break;
  //   }
  // }
  // return isFind
}
// 判断数组中是否存在8输出是否
let nums = [1,3,5,73,6,7,8]
console.log(findTarget(nums, 90) ? '是':'否');
// 判断数字3是否同时存在于nums 和 nums2中输出是否
let nums2 = [4,6,32,7,3,8]
console.log(findTarget(nums, 3) && findTarget(nums2, 3) ? '是':'否');
// 判断nums3中是否所有数字都在nums中存在，输出是否
let nums3 = [3,5,7]
for (let i = 0; i<nums3.length; i++) {
  if (!findTarget(nums, nums3[i])) {
    console.log('否');
    return
  }
}
console.log('是')
