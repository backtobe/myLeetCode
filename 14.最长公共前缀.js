/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minLength = Math.min(...strs.map(str => str.length)) // 最短长度

  if (strs.length === 0 || minLength === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  /* 横向扫描 */
  return widthScanf(strs, minLength)
  // return deepScanf(strs, minLength)
};

function widthScanf (strs, minLength) {
  let res = strs[0].substr(0, minLength) // 截取第一个元素的最短长度字符串作为初始结果
  while (res.length) {
    let flag = true //完全匹配标志
    for (let i = 0; i < strs.length; i++) { // 对数组做遍历
      if (res !== strs[i].substr(0, minLength)) { // 字符串中找到前缀与结果不一致
        res = strs[i].substr(0, --minLength) // 重新设置结果前缀
        flag = false // 完全匹配置否
        break // 退出数组遍历循环
      }
    }
    if (flag) { //如果完全一致 退出while循环
      break
    }
  }
  return res
}
function deepScanf (strs, minLength) {
  let res = ''
  let flag = true
  while (flag) {
    for (let i = 0; i < minLength; i++) {
      if (strs.every(str => str[i] === strs[0][i])) {
        res = res + strs[0][i]
        if (i === minLength - 1) {
          break
        }
      } else {
        flag = false
        break
      }
    }
  }
  return res
}
// @lc code=end

