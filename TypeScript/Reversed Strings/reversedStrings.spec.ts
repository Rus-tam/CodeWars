import {solution} from "./reversedStrings";

describe('Testing solution', () => {
    it('Should return reversed string', () => {
        expect(solution('world')).toEqual('dlrow');
        expect(solution('word')).toEqual('drow');
        expect(solution('')).toEqual('');
    })
})