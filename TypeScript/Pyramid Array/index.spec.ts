import { pyramid } from './index';

describe('Testing `pyramid` function', () => {
  it('Should return `[]`', () => {
    expect(pyramid(0)).toEqual([]);
  });

  it('Should return `[[1], [1, 1]`', () => {
    expect(pyramid(2)).toEqual([[1], [1, 1]]);
  });

  it('Should return `[[1], [1, 1], [1, 1, 1]]`', () => {
    expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]);
  });
});
