const { isValidUsername } = require('./username');

// const isValidUsername = (username) => {
//     if (username.length < 8) return false;
//     if (containsInvalidCharacters(username)) return false;
//     return true;
// };

// Rules of testing
// 1. we are always asserting on an output
// 2. we are always testing whatever we import

// #isValidUsername
describe('#isValidUsername', () => {
    it('should return false if it does not contain at least 1 lower & 1 upper case char', () => {
        const USERNAME = '12345678';
        expect(isValidUsername(USERNAME)).toBe(false);
    });

    it('should return false if it does not contain at least 1 lower case char', () => {
        const USERNAME = 'GABRIELANG';
        expect(isValidUsername(USERNAME)).toBe(false);
    });

    it('should return false if username contains invalid chars', () => {
        const USERNAME = 'gabriel!';
        expect(isValidUsername(USERNAME)).toBe(false);
    });

    it('should return false if length of username is less than 8 chars', () => {
        const USERNAME = 'gabriel';
        expect(isValidUsername(USERNAME)).toBe(false);
    });

    //  INVALID CHARCTERS: !@#$%^&*()_+=-|{}[]:;<>?,./
    it('should return true if username is more than 7 chars & no invalid chars', () => {
        const USERNAME = 'Gabrielang';
        expect(isValidUsername(USERNAME)).toBe(true);
    });
});
