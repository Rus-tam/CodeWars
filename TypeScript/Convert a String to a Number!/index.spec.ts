import {stringToNumber} from "./index";

describe('Testing stringToNumber function', () => {
  it('Should return integer string', () => {
    expect(stringToNumber('1234')).toEqual(1234);
    expect(stringToNumber('4567')).toEqual(4567);
    expect(stringToNumber('1000')).toEqual(1000);
  })
})