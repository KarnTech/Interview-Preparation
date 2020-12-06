/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let value = []
    while(head) {
        value.push(head.val)
        head = head.next
    }
    if(value.toString() == value.reverse().toString()){return true } else {return false}
    
};