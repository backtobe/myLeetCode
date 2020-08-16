/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 跟斐波那契数列类似 可以使用递归法 递归记忆法
  if(n < 3) return n
  let preVal1 = 1,preVal2 = 2,res
  let i = 3
  while(i <= n){
      res = preVal1 + preVal2
      preVal1 = preVal2
      preVal2 = res
      i++
  } 
  return res
};
// @lc code=end

