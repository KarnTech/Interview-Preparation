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
var deleteDuplicates = function(head) {
    let bla  = head
    while (bla !== null && bla.next !== null){
            if (bla.val  === bla.next.val){
                bla.next = bla.next.next
            }else {
                bla = bla.next
            }
        }
    return head
    
};