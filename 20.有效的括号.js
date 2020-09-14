/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false
  let arr = []
  let paren = { '(': ')', '[': ']', '{': '}' } // ? 妙哉
  for (let i = 0; i < s.length; i++) {
    // const temp = s[i], temp1 = paren[s[i]]
    if (paren[s[i]]) { // 是左括号  paren[s[i]] 左括号键 对应的 值 左括号存在于paren中
      arr.push(s[i])
    } else { //是右括号
      if (s[i] !== paren[arr.pop()]) {
        return false
      }
    }
  }
  return arr.length === 0
};
// @lc code=end

