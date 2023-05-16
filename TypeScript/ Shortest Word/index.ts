// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/typescript

export function findShort(s: string): number {
  return s
    .split(' ')
    .map((item) => item.length)
    .sort((a, b) => a - b)[0];
}

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript
