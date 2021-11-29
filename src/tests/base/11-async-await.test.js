import { getImagen } from "../../base/11-async-await"

describe('Test async', () => {
    test('should return url of an image', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    })
})