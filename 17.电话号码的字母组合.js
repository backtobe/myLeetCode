/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const dir = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const res = []
  function backTrace (combination, nextDigits) {
    if (nextDigits.length === 0) {
      res.push(combination)
    } else {
      for (let letter of dir[nextDigits[0]]) {
        backTrace(combination + letter, nextDigits.substring(1))
      }
    }
  }
  backTrace('', digits)
  return res
};
// @lc code=end

