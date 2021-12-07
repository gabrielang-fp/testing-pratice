//1. console log out the full names of all the people in the data set
// your answer here:

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

const getFullname = (mock) => {
    // return 'Full name is: ' + mock.firstName + ' ' + mock.lastName;
    return `${mock.firstName} ${mock.lastName}`;
};

//2. console log out the full names of all the
// people that has at least 3 stocks in their portfolio
const getFullnameIfHas3Stocks = (mock) => {
    if (mock.portfolio.length >= 3) {
        return getFullname(mock);
    }

    return '';
};

for (let i = 0; i < mockData.length; i++) {
    const data = mockData[i];
    const fullName = getFullnameIfHas3Stocks(data);
    if (fullName) {
        // console.log(fullName);
    }
}

// for (let i = 0; i < mockData.length; i++) {
//     const nameList =
//         'Full name is: ' + mockData[i].firstName + ' ' + mockData[i].lastName;
//     console.log(nameList);
// }

module.exports = {
    getFullname,
    getFullnameIfHas3Stocks,
};
