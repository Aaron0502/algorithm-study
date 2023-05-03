function merge(arr: number[], l: number, mid: number, r: number) {
  let i = l;
  let j = mid + 1;
  let helpIndex = 0;
  const helpArr: number[] = [];
  let count = 0;
  while (i <= mid && j <= r) {
    if (arr[i] < arr[j]) {
      helpArr[helpIndex++] = arr[i++];
    } else {
      count += r - j + 1;
      helpArr[helpIndex++] = arr[j++];
    }
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
  return count;
}

function process(arr: number[], l: number, r: number): number {
  if (l === r) {
    return 0;
  }
  const mid = l + ((r - l) >> 1);
  return (
    process(arr, l, mid) + process(arr, mid + 1, r) + merge(arr, l, mid, r)
  );
}

export function reversePairs(arr: number[]) {
  const arrLen = arr.length;
  if (arrLen < 2) {
    return 0;
  }
  return process(arr, 0, arrLen - 1);
}

export function reversePairsTest() {
  const arr = [1, 3, 4, 2, 5];
  console.log("reversePairsTest", reversePairs(arr));
}
