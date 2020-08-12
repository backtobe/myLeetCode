/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针法
// var removeDuplicates = function (nums) {
//   let i = 0; // 不重复标记 不重复的话 i始终比j小1 出现重复 则 i不再++，处于停滞状态 j依然前进 直到找到一个数据致使两个指针对应的数据不同 i的下一个指针对应数据会被赋值为当前j指针对应的值
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] !== nums[i] && j - i > 0) {
//       nums[++i] = nums[j]
//     }
//   }
//   return i + 1
// };
var removeDuplicates = function (nums) {
  let count = 0; // 重复标记
  for (let i = 1; i < nums.length; i++) {
    // console.log(nums[i],nums[i-1])
    if (nums[i] != nums[i - 1]) {
      // console.log('!==',i-count)
      nums[i - count] = nums[i]
    } else {
      count++;
    }
  }
  return nums.length - count;
};

// @lc code=end

