/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return dichotomy(nums, target)
};

function lineScan (nums, target) {
  /*
    线性扫描 复杂度不满足要求
    时间复杂度 O(n)
    空间复杂度 O(1)
  */
  let res = [-1, -1]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res[0] = i
      break
    }
  }
  if (res[0] === -1) {// 一遍扫描未找到目标 直接返回
    return res
  }
  for (let i = nums.length - 1; i > - 1; i--) {
    if (nums[i] === target) {
      res[1] = i
      break
    }
  }
  return res
}

function dichotomy (nums, target) {
  let res = [-1, -1]
  for (let l = 0, r = nums.length - 1; l <= r;) {
    let mid = parseInt((l + r) / 2)
    let curNum = nums[mid]
    if (curNum < target) { // l mid target r
      l = mid + 1
    } else { // l target mid r 左边界
      if (curNum === target) {
        res[0] = mid
        break
      }
      r = mid - 1
    }
  }
  for (let l = 0, r = nums.length - 1; l <= r;) {
    let mid = parseInt((l + r) / 2)
    let curNum = nums[mid]
    if (curNum > target) { // l target mid r 
      r = mid - 1
    } else { // l mid target r 右边界
      if (curNum === target) {
        res[1] = mid
        break
      }
      l = mid + 1
    }
  }
  return res
}
// @lc code=end

