/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return mapFun(s, t)
};

function letterSort (s, t) {
  // 时间复杂度 O(NlogN) 将字符串按字典序排列 最后比较
  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true
  }
  return false
}
function mapFun (s, t) {
  // 统计字符串中字符串出现的次数
  // 时间复杂度O(N)
  if (s.length !== t.length) return false
  let sMap = {}, tMap = {} // tArr = [] sArr=[]
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]]++
    } else {
      sMap[s[i]] = 1
    }
    if (tMap[t[i]]) {
      tMap[t[i]]++
    } else {
      tMap[t[i]] = 1
    }
  }
  for (let k in sMap) {
    if (!tMap[k] || tMap[k] !== sMap[k]) {
      return false
    }
  }
  return true
}
// @lc code=end

