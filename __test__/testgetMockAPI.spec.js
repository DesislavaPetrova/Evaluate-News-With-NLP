import { getMockAPI } from '../src/client/js/getMockAPI';

test('testing data', () => {
    expect(getMockAPI('test')).resolves.toBe({
        'title': 'neutral',
        'message': 'this is a message',
        'time': 'now'
    });
});