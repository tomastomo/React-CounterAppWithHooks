import { getCarsById } from "../../base/08-imp-exp";
import { getCarByIdAsync } from "../../base/09-promesas";
import cars from "../../data/cars";

describe('Test 09', () => {
    test('should return a car with async', (done) =>{
        const id = 1;

        getCarByIdAsync(id)
        .then(car => {
            expect(car).toBe(cars[0])
            done();
        });
    });

    test('should return an error if car does not exists', (done) => {
        const id = 10;

        getCarByIdAsync(id)
        .catch( error => {
            expect(error).toBe('No se pudo encontrar el coche');
            done();
        });
    });;

})