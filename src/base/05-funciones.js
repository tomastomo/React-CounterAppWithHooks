
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: '1',
        username: 'React'
});

// Tarea
export const getActiveUser = ( nombre ) =>({
    uid: '2',
    username: nombre
})

const usuarioActivo = getActiveUser('Tomas');
