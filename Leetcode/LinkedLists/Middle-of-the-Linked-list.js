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
const middleNode = (head) => {
    let p1 = head;
    let p2 = head;
    
    // while there is a node and there is a next (not at end)
    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1; // p1 points to the mid
};