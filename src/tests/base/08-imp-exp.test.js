import { getCarsById, getCarsByOwner } from "../../base/08-imp-exp";
import cars from "../../data/cars";

describe('Test 08', () => {

    test('should return one car by id', () => {
        const id = 1;
        const car = getCarsById(id);

        const dataCars = cars.find(car => car.id === id);

        expect(car).toEqual(dataCars);
    })

    test('should return undefined if car does not exists', () => {
        const id = 10;
        const car = getCarsById(id);

        expect(car).toBe(undefined);
    })

    test('should return an array with Volvo cars', () => {
        const h = cars.filter(car => car.owner === 'Volvo');
        const her = getCarsByOwner('Volvo');

        expect(h).toEqual(her);
    })

    test('should return an array with Range Rover cars', () => {
        const h = cars.filter(car => car.owner === 'Range Rover');
        const her = getCarsByOwner('Range Rover');
        
        expect(her.length).toBe(1);
    })

})