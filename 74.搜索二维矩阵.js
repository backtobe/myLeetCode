/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if(!matrix.length || !matrix[0].length ) return false
  let rowSize = matrix.length, columnSize = matrix[0].length
  let row = 0, column = columnSize - 1
  while (row < rowSize && column >= 0) {
    let cur = matrix[row][column]
    if (target === cur) return true
    if (target > cur) row++
    if(target < cur ) column--
  }
  return false
};
// @lc code=end

