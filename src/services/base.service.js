function baseService(alphabet) {
    async function toBase62(number) {
        if (number === 0) {
            return alphabet[0]
        }

        let code = '';

        while (number > 0 ) {
            code = alphabet[number % alphabet.length] + code;
            number = Math.floor(number / alphabet.length);
        }

        return code;

    }

    return {
        toBase62,
    };
}

module.exports = baseService;