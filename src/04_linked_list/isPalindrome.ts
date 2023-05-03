// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 快慢指针
 */
function isPalindrome(head: ListNode | null): boolean {
  if (head) {
    let slowList: ListNode | null = head;
    let fastList: ListNode | null = head.next;
    const listVal: number[] = [slowList!.val];
    while (fastList && fastList.next) {
      slowList = slowList!.next;
      fastList = fastList.next.next;
      listVal.push(slowList!.val);
    }

    // 偶数个
    if (fastList) {
      slowList = slowList!.next;
    }
    while (slowList) {
      if (slowList.val !== listVal.pop()) {
        slowList = null;
        return false;
      } else {
        slowList = slowList.next;
      }
    }
    return true;
  } else {
    return false;
  }
}
