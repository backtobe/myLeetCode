/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let preHeader = new ListNode(-1)
  preHeader.next = head
  let pre = preHeader
  let cur = pre.next
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next // cur 只是做评判相等的 pre才是用来进行移除的
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return preHeader.next
};
// @lc code=end

