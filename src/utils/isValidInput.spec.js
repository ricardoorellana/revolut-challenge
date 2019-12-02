import { isValidInput } from './isValidInput';

describe('.isValidInput', () => {
    it('should validate input is with the expected format', () => {
        expect(isValidInput(123.1)).toBe(true);
        expect(isValidInput(123)).toBe(true);
        expect(isValidInput(123.22)).toBe(true);
        expect(isValidInput(120000)).toBe(true);
        expect(isValidInput('')).toBe(true);
    });

    it('should validate input is not valid', () => {
        expect(isValidInput(12.123)).toBe(false);
        expect(isValidInput(213123.123123)).toBe(false);
        expect(isValidInput()).toBe(false);
    })
});