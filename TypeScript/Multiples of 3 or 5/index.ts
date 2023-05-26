export class Challenge {
  static solution(number: number): number {
    return Array.from({ length: number - 1 }, (value: number, index: number) => {
      if ((index + 1) % 3 === 0 || (index + 1) % 5 === 0) {
        return index + 1;
      } else {
        return 0;
      }
    }).reduce((pre, curr) => pre + curr, 0);
  }
}
