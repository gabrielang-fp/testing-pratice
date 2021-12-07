const { add } = require('./sample');

// #add
describe('#add', () => {
    it('1 + 1 is 2', () => {
        // add() <- expect to call this function
        expect(add(1, 1)).toEqual(2);
    });

    it('1 + 1 is not 3', () => {
        expect(add(1, 1)).not.toEqual(3);
    });
});
