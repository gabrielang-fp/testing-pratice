const { isValidUsername } = require('./username');

describe('#isValidUsername', () => {
    it('- accepts a valid username', () => {
        const isValid1 = isValidUsername('hello world');
        const isValid2 = isValidUsername('i love javascript');
        const isValid3 = isValidUsername('learning testing woo');
        const isValid4 = isValidUsername('some usernameeeee');

        expect(isValid1).toBe(true);
        expect(isValid2).toBe(true);
        expect(isValid3).toBe(true);
        expect(isValid4).toBe(true);
    });

    it('- rejects a short username', () => {
        const isValid = isValidUsername('abc');
        expect(isValid).toBe(false);
    });

    it('- rejects a username with invalid characters', () => {
        const isValid1 = isValidUsername('hello world!');
        const isValid2 = isValidUsername('hello world@');
        const isValid3 = isValidUsername('hello world#');
        const isValid4 = isValidUsername('hello world[');

        expect(isValid1).toBe(false);
        expect(isValid2).toBe(false);
        expect(isValid3).toBe(false);
        expect(isValid4).toBe(false);
    });
});
