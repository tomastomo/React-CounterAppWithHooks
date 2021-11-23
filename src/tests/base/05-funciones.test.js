import '@testing-library/jest-dom';
import { getActiveUser, getUser } from "../../base/05-funciones"

describe('Test 05', () => {

    test('getUser should return an object', () => {
        const userTest = {
            uid: '1',
            username: 'React'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    test('getUserActive should return an object', () => {
        const userActiveTest = {
            uid: '2',
            username: 'React'
        }
        const userActive = getActiveUser('React');
        expect(userActive).toEqual(userActiveTest);
    })

})