import { convert } from './convert';

const MOCK_RATES = {
    USD: 1,
    GBP: 0.77
}

const MOCK_USD_VALUE = 10;
const MOCK_GBP_CONVERTION_RESULT = 7.70;

describe('.convert', () => {
    it('should convert values from one currency to another', () => {
        const valueConverted = convert(MOCK_USD_VALUE, { from: 'USD', to: 'GBP', rates: MOCK_RATES });
        expect(valueConverted).toBe(MOCK_GBP_CONVERTION_RESULT);
    });

    it('should return same value if comparing equal currencies', () => {
        const valueConverted = convert(MOCK_USD_VALUE, { from: 'USD', to: 'USD', rates: MOCK_RATES });
        expect(valueConverted).toBe(MOCK_USD_VALUE);
    });
});