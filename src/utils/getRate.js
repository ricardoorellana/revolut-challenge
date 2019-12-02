export const getRate = ({ base, from, to, rates }) => {

    if ( !rates[from] || !rates[to]) {
        console.error('error');
    }

    if (from === base) {
        return rates[to];
    }

    if (to === base) {
        return 1 / rates[from];
    }

    return rates[to] * (1 / rates[from]);
}