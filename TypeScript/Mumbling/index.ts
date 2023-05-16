// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript

export function accum(s: string): string {
  let result: string = '';
  s.split('').forEach((letter, index) => {
    let block: string = '';
    for (let i = 0; i <= index; i++) {
      if (i === 0) {
        block += letter.toUpperCase();
      } else {
        block += letter.toLowerCase();
      }
    }
    if (result.length === 0) {
      result = result + block;
    } else {
      result = result + '-' + block;
    }
  });

  return result;
}
