import { getRate } from './getRate';

const MOCK_RATES = {
    EUR: 0.907548,
    GBP: 0.77426,
    USD: 1
}

describe('.getRate', () => {
    it('should get rates between two currencies', () => {
        const EUR_GBP_RATE = 0.8531339389211369;
        const rate = getRate({base: 'USD', from: 'EUR', to: 'GBP', rates: MOCK_RATES });
        expect(rate).toBe(EUR_GBP_RATE);
    });
});