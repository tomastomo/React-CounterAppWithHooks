import { arrayReturn } from "../../base/07-deses-arr"

describe('Test in 07', () => {

    test('should return string and number', () => {

        const [letters, numbers] = arrayReturn();

        //expect(arr).toEqual(['React', 1]);
        expect(letters).toBe('React');
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

    })

})