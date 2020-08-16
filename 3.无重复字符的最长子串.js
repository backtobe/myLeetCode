/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length
  let sIndex = 0, temp = 0, length = 1
  for (let i = 1; i < s.length; i++) {
    if (s.substr(sIndex, length).indexOf(s[i]) > -1) {
      sIndex = i + 1
      temp = 0
    } else {
      length = length < ++temp ? temp : length
    }
  }
  return length
};
// @lc code=end

