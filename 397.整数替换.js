/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let times = 0
  while (n !== 1) {
    if (n % 2) {
      if (n % 4 === 3 && n !== 3) {
        n = n + 1
      } else {
        n = n - 1
      }
    } else {
      n = n / 2
    }
    times++
  }
  return times
};
// 15 16 8 4 2 1
// 15 14 7 8 4 2 1
// 15 14 7 6 3 2 1
// 15 14 7 6 3 4 2 1
// 当n是奇数的时候，比如n=2k+1；无论是加1还是减1，结果都会是偶数，这个偶数有可能是4的倍数，有可能只是2的倍数(比如6,10等)。我们为了减少计算次数要尽可能多的往4的倍数上靠。所以当n%4=3的时候我们让n加1，当n%4=1的时候我们让n减1。当n等于3的时候是个例外，因为

// 3→2→1要比3→4→2→1替换次数少。所以我们计算的时候要把n=3的情况单独处理，

// @lc code=end

