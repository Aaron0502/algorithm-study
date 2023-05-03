/**
 * Definition for Node.
 *
 *
 */
export class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function cloneNode(val: number): Node {
  return {
    val,
    next: null,
    random: null,
  };
}

const a = {
  val: 1,
  random: null,
  next: {
    val: 2,
    random: null,
    next: null,
  },
};

function copyRandomList(head: Node | null): Node | null {
  if (head) {
    let tmpNode = head;
    while (tmpNode) {
      const next = tmpNode.next;
      const cloneItem = cloneNode(tmpNode.val);
      tmpNode.next = cloneItem;
      cloneItem.next = next;
      tmpNode = next!;
    }
    tmpNode = head;
    while (tmpNode) {
      if (tmpNode.random) {
        tmpNode.next!.random = tmpNode.random.next;
      }
      tmpNode = tmpNode.next!.next!;
    }
    const newHead = head.next;
    tmpNode = head;

    while (tmpNode) {
      const next = tmpNode.next!;
      tmpNode.next = next.next;
      tmpNode = next.next!;
      next.next = next.next ? next.next.next : null;
    }
    return newHead;
  } else {
    return null;
  }
}

export function testCopyRandomList() {
  return copyRandomList(a);
}
