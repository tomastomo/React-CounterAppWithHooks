import { getCarsById } from "./08-imp-exp";


export const getCarByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getCarsById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el coche' );
            }
        }, 1000 )
    
    });
}