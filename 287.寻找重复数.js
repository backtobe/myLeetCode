/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  /*
    时间复杂度 O(L) L表示nums的长度
    控件复杂度 O(L)
  */
  let preVal = {}
  for (let i = 0; i < nums.length; i++) {
    if (preVal[nums[i]]) {
      return nums[i]
    } else {
      preVal[nums[i]] = 1
    }
  }
};
// @lc code=end

