/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.trim() // 去空格
  if (!/^[-]|\d|[+]/.test(str)) return 0 // 非数字 非+- 开头
  let i = 0
  for (; i < str.length; i++) {
    if (!/\d/.test(str[i])) { // 元素非数字
      if (/[-]|[+]/.test(str[i]) && i === 0) {//以+-开头
        continue
      } else {
        break
      }
    }
  }
  // 超限判断
  let res = +(str.slice(0, i)) || 0
  if (res >= Math.pow(2, 31)) {
    res = Math.pow(2, 31) - 1
  } else if (res <= -Math.pow(2, 31)) {
    res = -Math.pow(2, 31)
  }
  return res
};
// @lc code=end

