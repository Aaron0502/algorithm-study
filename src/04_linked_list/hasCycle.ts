export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head) {
    let slow = head;
    let fast = head.next;
    while (slow && fast) {
      if (slow !== fast) {
        slow = slow.next!;
        fast = fast.next ? fast.next.next : null;
      } else {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
}
