/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = {} // 创建一个对象 存储前面的元素{num:index}键为数字 值为序号
  for (let i = 0; i < nums.length; i++) { // 元素遍历
    const currentNum = nums[i] // 拿到当前元素
    const targetNum = target - currentNum // 算出目标值
    if (hashMap[targetNum] !== undefined) { // 如果在hashMap中存在目标值
      return [hashMap[targetNum], i] // 返回 目标值的所对应的index 以及当前的index
    }
    hashMap[currentNum] = i // 如果 
  }

};
// @lc code=end

