/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  return oneLoopWithDoublePointers(nums)
};

function threeLoops (nums) {
  // 时间复杂度 O(N^3)
  // 超限 
  nums = nums.sort()
  let map = {}
  let res = []
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let temp = [nums[i], nums[j], nums[k]].sort()
        if (nums[i] + nums[j] + nums[k] === 0 && map[temp.join('+')] === undefined) {
          map[temp.join('+')] = 1
          res.push(temp)
        }
      }
    }
  }
  return res.sort((a, b) => a[0] - b[0])
}
function twoLoopsWithSet (nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {

    }
  }
}
function oneLoopWithDoublePointers (nums) {
  let res = []
  if (!nums || nums.length < 3) return res
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r]
      if (s > 0) {
        r--
      } else if (s < 0) {
        l++
      } else if (s === 0) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return res
}
// @lc code=end

