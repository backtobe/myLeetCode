/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  // let [cur, prev] = [head, null]

  // while (cur) {
  //   cur.next = prev
  //   prev = cur

  //   [cur.next, prev, cur] = [prev, cur, cur.next]
  // }
  // return prev
  let temp, prev = null, cur = head
  while (cur) {
    temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  // temp = null
  return prev
};
// @lc code=end

