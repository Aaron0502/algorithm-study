/**
 * 更改原数组，交换数组的两个位置
 */
export function swap<T>(arr: T[], i: number, j: number) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// export function swap(arr: number[], i: number, j: number) {
//   if (i !== j) {
//     arr[i] = arr[i] ^ arr[j];
//     arr[j] = arr[i] ^ arr[j];
//     arr[i] = arr[i] ^ arr[j];
//   }
// }
