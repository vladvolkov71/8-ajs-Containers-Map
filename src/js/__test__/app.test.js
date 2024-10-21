import {ErrorRepository} from '../app.js';

describe('ErrorRepository', () => {
test('ErrorRepository', () => {
    const errorRepository = new ErrorRepository();
    errorRepository.errors.set(1, 'Error 1');
    expect(errorRepository.translate(1)).toBe('Error 1');
    expect(errorRepository.translate(2)).toBe('Unknown error');
});

});