/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  const preHeader = new ListNode(-1)
  preHeader.next = head
  let pre = preHeader
  let cur = head
  let dupEle = null // 排序链表 节省空间开支 否则要用数组存储重复元素
  while (cur) {
    if ((cur.next && cur.val === cur.next.val) || dupEle ===cur.val) { // 前面的判断可以识别出有重复项 但是连别种重复项删除到一个后 就用后面的或来进行识别
      pre.next = cur.next
      dupEle = cur.val
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return preHeader.next
};
// @lc code=end

