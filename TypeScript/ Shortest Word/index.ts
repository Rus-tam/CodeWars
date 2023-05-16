// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/typescript

export function findShort(s: string): number {
  return s
    .split(' ')
    .map((item) => item.length)
    .sort((a, b) => a - b)[0];
}
