/* eslint-disable @typescript-eslint/ban-ts-comment */
import { swap, mockNums, isEqual, innerSort } from "../utils";

/**
 * 默认小根堆
 */
export class PriorityQueue {
  private heap: number[] = [];

  private isMaxHeap = false;

  constructor(initArr?: number[], isMaxHeap?: boolean) {
    this.isMaxHeap = isMaxHeap || false;
    if (initArr?.length) {
      this.heap = [...initArr];
      for (let i = this.heap.length - 1; i >= 0; i--) {
        this.siftDown(i);
      }
    }
  }

  // 入队
  public offer(element: number) {
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  // 入队
  public add(element: number) {
    this.offer(element);
  }

  // 出队
  public poll() {
    const head = this.heap[0];
    const tail = this.heap.pop()!;
    if (this.heap.length) {
      this.heap[0] = tail;
      this.siftDown(0);
    }
    return head === undefined ? null : head;
  }

  // 查看队首元素
  public peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // 查看长度
  public size() {
    return this.heap.length;
  }

  // 清空队列
  public clear() {
    this.heap = [];
  }

  // 判断队列是否为空
  public isEmpty() {
    return this.heap.length === 0;
  }

  // 上浮操作
  private siftUp(index: number) {
    const arr = this.heap;
    while (
      this.isMaxHeap
        ? arr[index] > arr[(index - 1) >> 1]
        : arr[index] < arr[(index - 1) >> 1]
    ) {
      swap(arr, index, (index - 1) >> 1);
      index = (index - 1) >> 1;
    }
  }

  // 下沉操作，也叫heapify
  private siftDown(index: number) {
    const heapSize = this.heap.length;
    const arr = this.heap;
    let left = index * 2 + 1;
    if (this.isMaxHeap) {
      while (left < heapSize) {
        // 孩子节点中哪一个更大
        let largestIndex =
          left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
        largestIndex = arr[largestIndex] > arr[index] ? largestIndex : index;
        if (largestIndex === index) {
          break;
        }
        swap(arr, index, largestIndex);
        index = largestIndex;
        left = index * 2 + 1;
      }
    } else {
      while (left < heapSize) {
        let smallest =
          left + 1 < heapSize && arr[left + 1] < arr[left] ? left + 1 : left;
        smallest = arr[smallest] < arr[index] ? smallest : index;
        if (smallest === index) {
          break;
        }
        swap(arr, index, smallest);
        index = smallest;
        left = index * 2 + 1;
      }
    }
  }
}

/**
 * 大根堆测试
 */
function testMaxHeap() {
  const arr = mockNums();
  const heap1 = new PriorityQueue(arr, true);
  const heap2 = new PriorityQueue(undefined, true);
  arr.forEach((item) => heap2.offer(item));

  const sortArr1 = arr.map(() => heap1.poll()!).reverse();
  const sortArr2 = arr.map(() => heap2.poll()!).reverse();
  const sortArr3 = innerSort([...arr]);
  const isPass = isEqual(sortArr1, sortArr2) && isEqual(sortArr1, sortArr3);
  console.log("大根堆", isPass ? "测试通过！" : "测试不通过！");
}

/**
 * 小根堆测试
 */
function testMinHeap() {
  const arr = mockNums();
  const heap1 = new PriorityQueue(arr);
  const heap2 = new PriorityQueue(undefined);
  arr.forEach((item) => heap2.offer(item));

  const sortArr1 = arr.map(() => heap1.poll()!);
  const sortArr2 = arr.map(() => heap2.poll()!);
  const sortArr3 = innerSort([...arr]);
  const isPass = isEqual(sortArr1, sortArr2) && isEqual(sortArr1, sortArr3);
  console.log("小根堆", isPass ? "测试通过！" : "测试不通过！");
}

export function testPriorityQueue() {
  testMinHeap();
  testMaxHeap();
}
