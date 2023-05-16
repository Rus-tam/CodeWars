import { accum } from './index';

describe('Testing accum function', () => {
  it('Should return `A-Bb-Ccc-Dddd` string', () => {
    expect(accum('abcd')).toEqual('A-Bb-Ccc-Dddd');
  });
  it('Should return `Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu`', () => {
    expect(accum('ZpglnRxqenU')).toEqual(
      'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
    );
  });
});
