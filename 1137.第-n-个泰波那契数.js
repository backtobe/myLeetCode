/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  return iterative(n)
};
function fromBottomToTop (n) {
  /* 
    自下而上的记忆法
    时间复杂度 O(n)
    空间复杂度 O(n)
  */
  let triList = [0, 1, 1]
  let i = 3
  while (i <= n) {
    if (triList[i] === undefined) {
      triList[i] = triList[i - 1] + triList[i - 2] + triList[i - 3]
    }
    i++
  }
  return triList[n]
}
function fromTopToBottom (n) {
  /*
    自上而下的记忆法
    时间复杂度 O(n) // 
    空间复杂度 O(n) // 数组存储长度n
  */
  let triList = [0, 1, 1]
  function memorize (n) {
    if (triList[n] === undefined) {
      triList[n] = memorize(n - 1) + memorize(n - 2) + memorize(n - 3)
    }
    return triList[n]
  }
  return memorize(n)
}

function nest (n) {
  /*
    递归
    时间复杂度 2^n
    空间复杂度 O(n)
    会爆栈
  */
  if (n === 2) {
    return 1
  } else if ([0, 1].includes(n)) {
    return n
  }
  return nest(n - 1) + nest(n - 2) + nest(n - 3)
}
function iterative (n) {
  /*
    迭代法
    时间复杂度 O(n)
    空间复杂度 O(1) current,preVal1,preVal2,preVal3
  */
  if (n === 2) {
    return 1
  } else if ([0, 1].includes(n)) {
    return n
  }
  let current = 0, preVal1 = 0, preVal2 = 1, preVal3 = 1
  for (let i = 3; i <= n; i++) {
    current = preVal1 + preVal2 + preVal3
    preVal1 = preVal2, preVal2 = preVal3, preVal3 = current
  }
  return current
}
// @lc code=end

