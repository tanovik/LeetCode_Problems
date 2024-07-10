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

// x => 2y
// y => x/2 -> middle
function middleNode(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    if (head.next === null) return head;

    let fast = head

    let slow = head

    while(fast?.next){
        fast = fast?.next?.next // 2x
        slow = slow?.next // x
    }

    // If fast -> finishes last point, then slow -> is in the middle
    return slow
};