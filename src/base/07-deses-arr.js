

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;


export const arrayReturn = () =>{
    return ['React', 1];
}

//const [ letras, numeros ] = retornaArreglo();

const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}