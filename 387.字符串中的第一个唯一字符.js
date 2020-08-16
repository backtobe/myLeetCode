/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(let i = 0;i<s.length;i++){
    const arg = s.slice(i+1)
    const pre = s.slice(0,i)
    if(arg.indexOf(s[i]) === -1 && pre.indexOf(s[i]) === -1){
      return i
    }
  }
  return -1
};
// @lc code=end

