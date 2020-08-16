/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  return iterativeHelper(root)
};

function nestHelper (root) {
  /*
    嵌套dfs
    时间复杂度 O(n)
    空间复杂度 O(h)
  */
  if(root === null) return []
  const res = []
  function helper(root,level){
    if(res.length === level){
      res.push([])
    }
    res[level].push(root.val)
    root.left && helper(root.left,level+1)
    root.right && helper(root.right,level+1)
  }
  helper(root,0)
  return res
}

function iterativeHelper (root) {
  /*
    迭代实现bfs
    时间复杂度 O(n)
    空间复杂度 O(n)
  */
  let res = [] // 结果数组
  if (root === null) return res
  let q = [] // 队列中维系当前层级
  q.push(root)
  while (q.length) {
    const length = q.length // 存下当前层级的节点数
    res.push([]) // 推入当前层的空数组
    for (let i = 1; i <= length; i++) {
      const node = q.shift() //从队列中踢出第一个元素
      res[res.length - 1].push(node.val) // 将节点数据存当前层数组中
      node.left && q.push(node.left) //遍历左子节点
      node.right && q.push(node.right) // 遍历右子节点
    }
  }
  return res
}
// @lc code=end

