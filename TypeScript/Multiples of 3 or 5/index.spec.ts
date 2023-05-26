import { Challenge } from './index';

describe('Testing `solution` method of Challenge class', () => {
  test('Should return 23', () => {
    expect(Challenge.solution(10)).toEqual(23);
  });
  test('Should return 78', () => {
    expect(Challenge.solution(20)).toEqual(78);
  });
});
