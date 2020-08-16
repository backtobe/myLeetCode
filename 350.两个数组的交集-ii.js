/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const res = []
  const map = {}
  nums1.length > nums2.length && ([nums1, nums2] = [nums2, nums1])
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] === undefined) {
      map[nums1[i]] = Math.min(nums1.filter(item => item === nums1[i]).length, nums2.filter(item => item === nums1[i]).length)
    }
    console.log(map, res, nums1[i])
    if (nums2.indexOf(nums1[i]) > -1 && res.filter(item => item === nums1[i]).length < map[nums1[i]]) {
      res.push(nums1[i])
    }
  }
  return res
};
// @lc code=end

