export function pyramid(n: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result.push(Array.from({ length: i + 1 }, (value, index) => 1));
  }
  return result;
}
