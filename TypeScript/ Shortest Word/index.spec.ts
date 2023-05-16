import { findShort } from './index';

describe('Testing findShort function', () => {
  it("Should return shortest word's length", () => {
    expect(findShort('Hello world')).toEqual(5);
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toEqual(3);
    expect(findShort('i want to travel the world writing code one day')).toEqual(1);
    expect(findShort('turns out random test cases are easier than writing out basic ones')).toEqual(3);
    expect(findShort('lets talk about javascript the best language')).toEqual(3);
    expect(findShort('Lets all go on holiday somewhere very cold')).toEqual(2);
    expect(findShort("Let's travel abroad shall we")).toEqual(2);
  });
});
