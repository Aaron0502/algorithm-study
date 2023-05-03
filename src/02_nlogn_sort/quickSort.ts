import { mockNums, sortTest, swap } from "../utils";

function partition(arr: number[], l: number, r: number) {
  let lEdge = l - 1; // 小于区域左边界
  let rEdge = r; // 大于区域右边界
  while (l < rEdge) {
    if (arr[l] < arr[r]) {
      swap(arr, ++lEdge, l++);
    } else if (arr[l] > arr[r]) {
      swap(arr, l, --rEdge);
    } else {
      l++;
    }
  }
  swap(arr, rEdge, r);
  // 返回左边界点和右边界点
  return [lEdge + 1, rEdge];
}

function process(arr: number[], l: number, r: number) {
  if (l < r) {
    const randomIndex = l + Math.floor(Math.random() * (r - l + 1));
    swap(arr, randomIndex, r);
    const [lEdge, rEdge] = partition(arr, l, r);
    process(arr, l, lEdge - 1);
    process(arr, rEdge + 1, r);
  }
}

export function quickSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  process(arr, 0, arrLen - 1);
  return arr;
}

export function quickSortTest() {
  const nums = mockNums();
  console.log("quickSortTest", quickSort(nums));
  sortTest(quickSort);
}
