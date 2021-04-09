// O(n^2) time | O(1) space
export function bubbleSortOptimized(array: number[]) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    ++counter;
  }

  return array;
}

function swap(array: number[], firstIndex: number, secondIndex: number): void {
  const temp = array[firstIndex];

  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
