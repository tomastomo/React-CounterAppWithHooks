import cars from '../data/cars';

export const getCarsById = (id) => cars.find( (car) => car.id === id );

export const getCarsByOwner = ( owner ) => cars.filter( (car) => car.owner === owner );


