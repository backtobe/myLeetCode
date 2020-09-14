/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  // 新建哑节点并更新指向
  let preHeader = new ListNode(-1)
  preHeader.next = head

  let pre = preHeader
  let cur = head

  // 创建临时节点 存储后节点的next
  let temp
  while (cur && cur.next) {
    // 存储临时节点的next
    temp = cur.next.next
    // 前置->   中间(当前) ->后置 -> 后续节点
    pre.next = cur.next     // 前置节点next指向后置节点 前置-> 后置 -> 后续 中间(cur) -> 后置 
    cur.next.next = cur     // 后置节点next指向当前 此时整个链表已经一分为二 前置 ->后置 -> 中间  
    cur.next = temp    // 将存储的next指向 赋值给当前 前置 -> 后置 -> 中间(cur) -> 后续

    pre = cur // 将前置节点修改为当前节点 前置(oldpre)->后置->中间(cur,pre)->后续
    cur = cur.next // 将当前节点后移一位 前置(oldpre)->后置->中间(pre)->后续(cur)->其他
  }
  return preHeader.next
};
// @lc code=end

