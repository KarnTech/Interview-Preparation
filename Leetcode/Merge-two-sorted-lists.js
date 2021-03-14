/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
        let sortedlist  =  new ListNode(null, null)
        let output  = sortedlist
        let head = sortedlist
        while (l1 != null && l2 != null){
              if (l1.val < l2.val){
                sortedlist.next = new ListNode(l1.val)
                l1 = l1.next;
            }else {
                sortedlist.next  = new ListNode(l2.val);
                l2= l2.next;
            }
            sortedlist  = sortedlist.next;

        }
          
    
    if (l1 !== null){
        sortedlist.next  =  l1;
    }
    if (l2 !== null) {
        sortedlist.next  = l2;
    }
    return output.next
    
};