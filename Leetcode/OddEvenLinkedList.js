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
var oddEvenList = function(head) {
    if (head == null){return null}
    let cur  = head
    let cur1 = head.next
    let combined =  new ListNode()
    let start  = combined
    while(cur){
        if(cur !== null){
            combined.next  = new ListNode(cur.val)
            combined  = combined.next
            cur = cur?.next?.next
        } 
    }
    
    while(cur1){
        if(cur1 !== null){
            combined.next  = new ListNode(cur1.val)
            combined  = combined.next
            cur1 = cur1?.next?.next
        } 
    }
    return start.next
};