describe('Test in demo.test.js', () => {
    test ('should be equals', () => {
        const mensaje = 'hello world';
    
        const mensaje2 = `hello world`;
    
        expect(mensaje).toBe(mensaje2)
    })
})