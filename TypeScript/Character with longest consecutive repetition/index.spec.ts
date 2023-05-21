import { longestRepetition } from './index';

describe('Testing longestRepetition function', () => {
  it('Should return `[`b`, 2]`', () => {
    expect(longestRepetition('bbhoprb')).toEqual(['b', 2]);
    expect(longestRepetition('cbdeuuu900')).toEqual(['u', 3]);
    expect(longestRepetition('bbbaaabaaaa')).toEqual(['a', 4]);
  });
});
