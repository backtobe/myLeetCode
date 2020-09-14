/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  // head.next && (let evenHeader = head.next)
  let evenHeader = new ListNode(null)
  let evenCur = evenHeader
  let cur = head
  while (cur && cur.next) {
    evenCur.next = cur.next
    evenCur = evenCur.next
    cur.next = cur.next.next
    cur && (cur = cur.next)
  }
  evenCur.next = null
  cur ? cur.next = evenHeader.next : cur = evenHeader.next
  evenHeader = null
  return head

};
// @lc code=end

