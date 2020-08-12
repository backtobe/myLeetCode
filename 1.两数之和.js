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
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const targetNum = target - currentNum
    const targetIndex = hashMap[targetNum]
    if (targetIndex !== undefined) {
      return [targetIndex, i]
    }
    hashMap[currentNum] = i
  }

};
// @lc code=end

