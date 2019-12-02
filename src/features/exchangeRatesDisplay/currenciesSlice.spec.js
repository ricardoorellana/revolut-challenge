import currencies, { getCurrenciesStart, getCurrenciesSuccess } from './currenciesSlice';

const initialState = {
    base: '',
    rates: {},
    isLoading: false,
    defaultFrom: 'EUR',
    defaultTo: 'GBP'
}

const MOCK_PAYLOAD = {
    base: 'USD',
    rates: {
        EUR: 0.907548,
        GBP: 0.77426,
        USD: 1
    },
    isLoading: false,
    defaultFrom: 'EUR',
    defaultTo: 'GBP'
}

describe('.currenciesSlice', () => {
    it('should handle initial state', () => {
        expect(currencies(undefined, {})).toEqual(initialState)
    });

    it('should handle getCurrenciesSuccess', () => {
        expect(
            currencies(initialState, {
                type: getCurrenciesSuccess,
                payload: MOCK_PAYLOAD
            })
        ).toMatchObject(MOCK_PAYLOAD)
    });
});
