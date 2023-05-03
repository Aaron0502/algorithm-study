function merge(arr: number[], l: number, mid: number, r: number) {
  let i = l;
  let j = mid + 1;
  let helpIndex = 0;
  const helpArr: number[] = [];
  let sum = 0;
  while (i <= mid && j <= r) {
    if (arr[i] < arr[j]) {
      sum += arr[i] * (r - j + 1);
      helpArr[helpIndex++] = arr[i++];
    } else {
      helpArr[helpIndex++] = arr[j++];
    }
  }

  while (i <= mid) {
    helpArr[helpIndex++] = arr[i++];
  }
  while (j <= r) {
    helpArr[helpIndex++] = arr[j++];
  }
  return sum;
}

function process(arr: number[], l: number, r: number): number {
  if (l === r) {
    return 0;
  }
  const mid = l + ((r - l) >> 1);
  const leftSum = process(arr, l, mid);
  const rightSum = process(arr, mid + 1, r);
  return leftSum + rightSum + merge(arr, l, mid, r);
}

export function smallSum(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return 0;
  }
  return process(arr, 0, arrLen - 1);
}

export function smallSumTest() {
  const arr = [1, 3, 4, 2, 5];
  console.log("smallSumTest", smallSum(arr));
}
