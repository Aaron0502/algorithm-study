// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
    if (slow === fast) {
      slow = head;
      break;
    }
  }

  if (slow && fast) {
    while (slow !== fast) {
      slow = slow.next!;
      fast = fast!.next;
    }
    return slow;
  } else {
    return null;
  }
}
