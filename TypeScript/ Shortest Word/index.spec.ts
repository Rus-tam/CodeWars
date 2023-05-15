import { findShort } from './index';

describe('Testing findShort function', () => {
  it("Should return shortest word's length", () => {
    expect(findShort('Hello world')).toEqual(5);
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toEqual(3);
    expect(findShort('i want to travel the world writing code one day')).toEqual(1);
  });
});
