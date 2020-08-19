import { validateURL } from '../src/client/js/validateURL';

describe('Test the function "validateURL()" for valid url' , () => {
    var url = 'https://www.wikipedia.org/';
    test('It should return true', async () => {
        const response = validateURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});