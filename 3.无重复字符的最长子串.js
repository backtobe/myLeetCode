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
  let temS = {}, res = 0
  for (let i = 0; i < s.length; i++) {
    if (temS[s[i]] !== undefined && temS[s[i]] !== -1) {
      let index = temS[s[i]]
      while (index-- !== 0) {
        temS[s[index]] <= index && (temS[s[index]] = -1)
      }
    }
    temS[s[i]] = i
    length = Object.keys(temS).filter(key => temS[key] !== -1).length
    length > res && (res = length)
  }
  return res
};
// @lc code=end

