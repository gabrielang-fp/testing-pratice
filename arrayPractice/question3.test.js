const { question3Solution } = require('./question3');

const sampleData = {
    id: 4,
    firstName: 'Em',
    lastName: 'Cornfoot',
    portfolio: [
        { ticker: 'APEI', position: 727, price: '$59.22' },
        { ticker: 'OSBCP', position: 334, price: '$41.28' },
        { ticker: 'BPL', position: 381, price: '$80.14' },
        { ticker: 'SCM', position: 730, price: '$82.38' },
        { ticker: 'CSCO', position: 75, price: '$39.68' },
    ],
};

const falsySampleData = {
    id: 4,
    firstName: 'Em',
    lastName: 'Cornfoot',
    portfolio: [{ ticker: 'CSCO', position: 75, price: '$39.68' }],
};

describe('#question3Solution', () => {
    it('- returns the full name', () => {
        const output = question3Solution(sampleData);
        expect(output).toEqual('Em Cornfoot');
    });

    it('- returns the full name if position > 200', () => {
        const output1 = question3Solution(sampleData);
        expect(output1).toBe('Em Cornfoot');
    });

    it('- returns empty string if no position > 200', () => {
        const output2 = question3Solution(falsySampleData);
        expect(output2).toEqual('');
    });
});
