/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const res = []
  for(let i = 0;i<nums.length;i++){
    if(res.length === 2) break
    if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
      res.push(nums[i])
    } 
  }
  return res
};
// @lc code=end

