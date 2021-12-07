const { getFullname, getFullnameIfHas3Stocks } = require('./arrayPractice');

describe('#questionOne', () => {
    it('gives me the full name', () => {
        const data = {
            id: 1,
            firstName: 'Giacinta',
            lastName: 'Dole',
            portfolio: [
                { ticker: 'CCRN', position: 701, price: '$43.49' },
                { ticker: 'KTWO', position: 570, price: '$26.79' },
                { ticker: 'SPE^B', position: 489, price: '$61.78' },
            ],
        };

        expect(getFullname(data)).toEqual('Giacinta Dole');
    });

    it('gives me the full name if they have 3 stocks', () => {
        const data = {
            id: 1,
            firstName: 'Giacinta',
            lastName: 'Dole',
            portfolio: [
                { ticker: 'CCRN', position: 701, price: '$43.49' },
                { ticker: 'KTWO', position: 570, price: '$26.79' },
                { ticker: 'SPE^B', position: 489, price: '$61.78' },
            ],
        };

        expect(getFullnameIfHas3Stocks(data)).toEqual('Giacinta Dole');
    });

    it('does not give me the full name if they dont have 3 stocks', () => {
        const data = {
            id: 1,
            firstName: 'Giacinta',
            lastName: 'Dole',
            portfolio: [
                { ticker: 'CCRN', position: 701, price: '$43.49' },
                { ticker: 'SPE^B', position: 489, price: '$61.78' },
            ],
        };

        expect(getFullnameIfHas3Stocks(data)).toEqual('');
    });
});
