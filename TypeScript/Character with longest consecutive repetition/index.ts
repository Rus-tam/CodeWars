export function longestRepetition(text: string): [string, number] {
  if (!text) {
    return ['', 0];
  }

  let longestChar = text[0];
  let longestLength = 1;
  let currentChar = text[0];
  let currentLength = 1;

  for (let i = 1; i < text.length; i++) {
    if (text[i] === currentChar) {
      currentLength++;
      if (currentLength > longestLength) {
        longestLength = currentLength;
        longestChar = text[i];
      }
    } else {
      currentChar = text[i];
      currentLength = 1;
    }
  }

  return [longestChar, longestLength];
}
