/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const header = new ListNode('header') // 新增头
  let current = header // 新链表当前节点
  let carry = 0 // 进位标志
  while (l1 || l2) {
    val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry // 数字相加
    current.next = new ListNode(val % 10) // 取余数新增节点
    current = current.next // 移动当前节点
    carry = parseInt(val / 10) // 获取进位
    l1 && (l1 = l1.next) // 移动l1
    l2 && (l2 = l2.next) // 移动l2
  }
  carry && (current.next = new ListNode(carry)) // 最高位进一处理
  return header.next
};
// @lc code=end

