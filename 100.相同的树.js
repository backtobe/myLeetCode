/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 将对节点的检验放到本层会减少对子节点检验的繁琐
  // 不然要考虑四种子节点检验的情况 p.left q.left 
  if(p == null && q == null){
      return true
  }
  if(p == null || q == null){
      return false
  }
  if(p.val != q.val){
      return false
  }
  return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};
// @lc code=end

