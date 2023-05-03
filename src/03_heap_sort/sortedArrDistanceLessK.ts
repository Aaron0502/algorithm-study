import { innerSort, isEqual } from "../utils";
import { PriorityQueue } from "../data-structure";

export function sortedArrDistanceLessK(arr: number[], k: number) {
  const heap = new PriorityQueue();
  const arrLen = arr.length;
  let index = 0;
  for (; index <= Math.min(arrLen, k); index++) {
    heap.add(arr[index]);
  }
  let i = 0;
  for (; index < arrLen; index++) {
    heap.add(arr[index]);
    arr[i++] = heap.poll()!;
  }
  while (!heap.isEmpty()) {
    arr[i++] = heap.poll()!;
  }
  console.log(99, i);
  return arr;
}

export function sortedArrDistanceLessKTest() {
  const arr = [3, 2, 1, 7, 6, 5];
  const sortArr1 = sortedArrDistanceLessK([...arr], 3);
  const sortArr2 = innerSort([...arr]);
  const isPass = isEqual(sortArr1, sortArr2);
  console.log(`几乎有序数组排序测试${isPass ? "通过" : "不通过"}`);
}
