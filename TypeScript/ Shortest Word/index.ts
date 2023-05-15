export function findShort(s: string): number {
  return s
    .split(' ')
    .map((item) => item.length)
    .sort()[0];
}
