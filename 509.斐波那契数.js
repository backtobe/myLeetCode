/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 * 
 */
var fib = function (N) {
  return iterative(N)
  // return fromTopToBottom(N)
};
function fromBottomToTop (N) {
  /*
  自下而上的记忆法
  时间复杂度 O(N)
  空间复杂度 O(N) 使用了长度为N的数组
  */
  let fibList = [0, 1]
  let i = 0
  while (i <= N) { // N = 2 i = 0
    if (fibList[i] === undefined) { // fibList[0] = 0 fibist[1] = 1
      fibList[i] = fibList[i - 1] + fibList[i - 2]
    }
    i++
  }
  return fibList[N]
}
function nest (N) {
  /*
    嵌套
    时间复杂度 O(2^N)
    空间复杂度 O(N)
  */
  if (N < 2) return N
  return nest(N) = nest(N - 1) + nest(N - 2)
}
function fromTopToBottom (N) {
  /*
    自上而下的记忆法 // 递归
    时间复杂度 O(N)
    空间复杂度 O(N)
  */
  let fibList = [0, 1]
  function memorize (N) {
    if (fibList[N] === undefined) {
      fibList[N] = memorize(N - 1) + memorize(N - 2)
    }
    return fibList[N]
  }
  return memorize(N)
}
function iterative (N){
  /* 
    自下而上的迭代法
    时间复杂度 O(N)
    空间复杂度 O(1) current preVal1 preVal2
  */
  if(N<2) return N
  let current,preVal1=0,preVal2=1
  for(let i=2;i<=N;i++){
    current = preVal1 + preVal2
    preVal1 = preVal2
    preVal2 = current
  }
  return current
}
// @lc code=end

