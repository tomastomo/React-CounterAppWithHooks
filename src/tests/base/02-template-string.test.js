import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Test in 02', () => {
    test('getSaludo should return hello + name', () => {
        const name = 'Tomas';
        const hello = getSaludo(name);
        expect(hello).toBe('Hola ' + name);
    })

    test('getSaludo should return React as default name', () => {
        const react = 'React';
        const hello = getSaludo();
        expect(hello).toBe('Hola ' + react);
    })

})