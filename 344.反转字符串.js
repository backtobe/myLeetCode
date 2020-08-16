/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  for(let i= 0;i<s.length/2;i++){
    if(s[i] === s[s.length - 1 - i]) continue
    [s[i],s[s.length - 1 - i]] = [s[s.length - 1 - i],s[i]]
  }
};
// @lc code=end

