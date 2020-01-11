module.exports = function parseTelloState(state) {
    return state
        .split(';')
        .map(x => x.split(':'))
        .reduce((data, [key, value]) => {
            data[key] = value;
            return data;
        }, {});
}