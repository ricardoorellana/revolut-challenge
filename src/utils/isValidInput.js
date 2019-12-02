const isValidInput = (input) => {
    const re = /^[0-9]+(\.([0-9]{1,2})?)?$/;

    return input === '' || re.test(input);
}

export { isValidInput };