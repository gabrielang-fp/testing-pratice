//3. console log out the full names of all the people that
// has a stock with a position greater than 200

// type MockData = {
//     id: number;
//     firstName: string;
//     lastName: string;
//     portfolio: Stock[];
//   }

//   type Stock = {
//     ticker: string;
//     position: number;
//     price: string;
//   }

const question3Solution = (data) => {
    for (let i = 0; i < data.portfolio.length; i++) {
        const portfolio = data.portfolio[i];
        if (portfolio.position > 200) {
            return `${data.firstName} ${data.lastName}`;
        }
    }

    return '';
};

const mockData = [
    {
        id: 1,
        firstName: 'Giacinta',
        lastName: 'Dole',
        portfolio: [
            { ticker: 'CCRN', position: 701, price: '$43.49' },
            { ticker: 'KTWO', position: 570, price: '$26.79' },
            { ticker: 'SPE^B', position: 489, price: '$61.78' },
        ],
    },
    {
        id: 2,
        firstName: 'Ripley',
        lastName: 'Sanderson',
        portfolio: [
            { ticker: 'SONA', position: 980, price: '$64.04' },
            { ticker: 'DFFN', position: 230, price: '$91.73' },
            { ticker: 'HTGX', position: 704, price: '$87.66' },
            { ticker: 'COMT', position: 146, price: '$17.98' },
        ],
    },
    {
        id: 3,
        firstName: 'Eadmund',
        lastName: 'Otson',
        portfolio: [
            { ticker: 'ENS', position: 454, price: '$80.50' },
            { ticker: 'DTV', position: 219, price: '$89.48' },
        ],
    },
    {
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
    },
    { id: 5, firstName: 'Tallia', lastName: 'Edgeller', portfolio: [] },
];

mockData.forEach((input) => {
    const name = question3Solution(input);
    if (name !== '') {
        console.log('[LOG]: name', name);
    }
});

module.exports = {
    question3Solution,
};
