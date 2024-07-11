/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(
  head: ListNode | null,
  parent: ListNode | null = null,
): ListNode | null {
  if (!head) return parent;

  const next = head.next;
  head.next = parent;

  return reverseList(next, head);
};