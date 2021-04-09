// O(n^2) time | O(1) space
export function bubbleSortNaive(array: number[]): number[] {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
      }
    }
  }

  return array;
}

function swap(array: number[], firstIndex: number, secondIndex: number): void {
  const temp = array[firstIndex];

  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}
