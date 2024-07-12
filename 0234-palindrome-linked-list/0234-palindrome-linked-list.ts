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

function isPalindrome(head: ListNode | null): boolean {
    // declare array that will hold node values
    const values = [];
    // iterate until the end of linked list:
    while(head) {
        // push each node value to values array
        values.push(head.val);
        // move head pointer right on each iteration
        head = head.next;
    }
    // declare left pointer
    let l = 0;
    // iterate with right pointers from end of array:
    for(let r = values.length - 1; r >= 0; r--) {
        // if values at left and right pointer not match return false
        if(values[l] !== values[r]) return false;
        // increment left pointer
        l++;
    }
    // return true
    return true
};