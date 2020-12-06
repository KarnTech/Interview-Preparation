/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur  = new ListNode()
    cur.next  = head;
    let p1 = cur;
    while(p1 !== null && p1.next !== null ) {
        if (p1.next.val === val ){
            p1.next = p1.next.next
        }
        else{
            p1 = p1.next
        }
        
    }
    return cur.next
};