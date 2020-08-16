/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  return twoPointer(head, n)

};

function twoLoop (head, n) {
  /*  第一种 两次遍历
        第一遍 得出长度
        第二遍 删除元素
      时间复杂度 O(N)N 为链表长度
      空间复杂度 O(1) 用了常数个变量
  */
  let length = 0
  let cur = head
  while (cur) {
    cur = cur.next
    length++
  }
  cur = head
  const preHeader = new ListNode(-1)
  preHeader.next = head
  let pre = preHeader
  let i = 0
  while (cur) {
    if (i++ === length - n) {
      pre.next = cur.next
      break
    }
    pre = cur
    cur = cur.next
  }
  return preHeader.next
}
function oneLoop (head, n) {
  /* 第二种 一次遍历 
      叠加next的次数 判断是否为null
      实际是循环嵌套
      时间复杂度 O(N*n)
      空间复杂度 O(n)
  */
  const nextA = new Array(n).fill('next')
  const preHeader = new ListNode(-1)
  preHeader.next = head
  let pre = preHeader
  let cur = head
  while (cur) {
    if (nextA.reduce((key1, key2) => key1[key2], cur) === null) {
      pre.next = cur.next
      break
    }
    pre = cur
    cur = cur.next
  }
  return preHeader.next
}

function twoPointer(head, n){
  /*
      第三种 双指针

  */
  const preHeader = new ListNode(-1)
  preHeader.next = head
  let fast = preHeader,pre = preHeader
  while(n){
    fast = fast.next
    n--
  }
  while(fast.next){
    pre = pre.next
    fast = fast.next
  }
  pre.next = pre.next.next
  return preHeader.next
}
// @lc code=end

