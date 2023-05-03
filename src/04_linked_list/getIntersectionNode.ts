// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA && headB) {
    let aLen = 0;
    let bLen = 0;
    let aTemp = headA;
    let bTemp = headB;
    while (aTemp) {
      aLen++;
      aTemp = aTemp.next!;
    }
    while (bTemp) {
      bLen++;
      bTemp = bTemp.next!;
    }

    let n = aLen - bLen;
    if (n > 0) {
      aTemp = headA;
      bTemp = headB;
    } else {
      aTemp = headB;
      bTemp = headA;
      n = -n;
    }
    while (n) {
      n--;
      aTemp = aTemp.next!;
    }

    while (aTemp) {
      if (aTemp === bTemp) {
        return aTemp;
      } else {
        aTemp = aTemp.next!;
        bTemp = bTemp.next!;
      }
    }
    return null;
  } else {
    return null;
  }
}
