/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = []
  function order (root) {
    if (root.children && root.children.length) {
      root.children.forEach(child => order(child))
    }
    res.push(root.val)
  }
  root && order(root)
  return res
};
// @lc code=end

