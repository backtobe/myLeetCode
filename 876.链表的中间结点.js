/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function(head) {
  return doublePointer(head)
};

function doubleLoop(head){
  let length = 0
  let cur = head
  while(cur){
    cur = cur.next
    length++
  }
  length = parseInt(length/2)
  cur = head
  while(length > 0){
    cur=cur.next
    length--
  }
  return cur
}

function doublePointer(head){
  let slow = fast = head
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
// @lc code=end

