import { createSlice } from '@reduxjs/toolkit';
import { fetchSpecificCurrencies } from '../../api/http';

const initialState = {
    base: '',
    rates: {},
    isLoading: false,
    defaultFrom: 'EUR',
    defaultTo: 'GBP'
}

const loading = state => {
    return { ...state, isLoading: true }
};

const currencySlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        getCurrenciesStart: loading,
        getCurrenciesSuccess: (state, action) => {
            const { base, rates } = action.payload;

            return {...state, base, rates, isLoading: false };
        }
    }
});

export const { getCurrenciesStart, getCurrenciesSuccess } = currencySlice.actions;

export const fetchCurrencies = () => async dispatch => {
    try {
        dispatch(getCurrenciesStart());

        const currencies = await fetchSpecificCurrencies();

        dispatch(getCurrenciesSuccess(currencies));
    } catch (err) {
        // TODO: Implement strategies for handling error
        //   dispatch(getIssuesFailure(err.toString()))
        console.log(err);
    }
}

export default currencySlice.reducer;
