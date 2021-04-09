const getRandomNumber = (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) =>
  Math.floor(Math.random() * max + min);

export const getSample = (size = 1000): number[] =>
  Array.from(Array(size)).map(() => getRandomNumber(0, size));
