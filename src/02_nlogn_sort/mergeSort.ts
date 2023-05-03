import { mockNums, sortTest } from "../utils";

/**
 * 归并排序
 */
function merge(arr: number[], l: number, mid: number, r: number) {
  const helpArr: number[] = [];
  let i = l;
  let j = mid + 1;
  let helpIndex = 0;
  while (i <= mid && j <= r) {
    helpArr[helpIndex++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
  }
  while (i <= mid) {
    helpArr[helpIndex++] = arr[i++];
  }
  while (j <= r) {
    helpArr[helpIndex++] = arr[j++];
  }
  helpArr.forEach((item, index) => {
    arr[l + index] = item;
  });
}

function process(arr: number[], l: number, r: number) {
  if (l === r) {
    return;
  }
  const mid = l + ((r - l) >> 1);
  process(arr, l, mid);
  process(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function mergeSort(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return arr;
  }
  process(arr, 0, arrLen - 1);
  return arr;
}

// function process(arr: number[], l: number, r: number) {
//   if (l === r) {
//     return [arr[l]];
//   }
//   const mid = l + ((r - l) >> 1);
//   const leftArr = process(arr, l, mid);
//   const rightArr = process(arr, mid + 1, r);
//   let i = 0;
//   let j = 0;
//   const tmpArr: number[] = [];
//   let tmpIndex = 0;
//   while (tmpIndex <= r - l) {
//     const leftItem = leftArr[i];
//     const rightItem = rightArr[j];
//     if (leftItem <= rightItem) {
//       if (i <= mid - l) {
//         tmpArr[tmpIndex] = leftItem;
//         i++;
//       } else {
//         tmpArr[tmpIndex] = rightItem;
//         j++;
//       }
//     } else {
//       if (j <= r - mid - 1) {
//         tmpArr[tmpIndex] = rightItem;
//         j++;
//       } else {
//         tmpArr[tmpIndex] = leftItem;
//         i++;
//       }
//     }
//     tmpIndex++;
//   }
//   return tmpArr;
// }

// export function mergeSort(arr: number[]) {
//   const arrLen = arr.length;
//   if (arrLen < 2) {
//     return arr;
//   }
//   return process(arr, 0, arrLen - 1);
// }

export function mergeSortTest() {
  const nums = mockNums();
  console.log("mergeSortTest", mergeSort(nums));
  sortTest(mergeSort);
}
