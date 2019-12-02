import { getRate } from './getRate';

export const convert = (value, {base = 'USD', from, to, rates}) => {
    return +(value * getRate({base, from, to, rates})).toFixed(2)
}
