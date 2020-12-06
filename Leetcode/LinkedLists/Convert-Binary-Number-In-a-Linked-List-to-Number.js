/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let value = head.val.toString();
    head = head.next;
    while (head) {
        value += head.val.toString();
        head=head.next
    }
    console.log(value)
    return parseInt(value, 2)
};