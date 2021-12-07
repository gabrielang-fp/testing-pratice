const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const INVALID = '!@#$%^&*()_+=-|{}[]:;<>?,./';

const containsInvalidCharacters = (username) => {
    const invalidCharacters = INVALID.split('');

    for (let i = 0; i < invalidCharacters.length; i++) {
        const char = invalidCharacters[i];
        if (username.includes(char)) return true;
    }

    return false;
};

const containsLowerCaseLetters = (username) => {
    const lowerChars = LOWER.split('');

    for (let i = 0; i < lowerChars.length; i++) {
        const char = lowerChars[i];
        if (username.includes(char)) return true;
    }

    return false;
};

const containsUpperCaseLetters = (username) => {
    const upperChars = UPPER.split('');

    for (let i = 0; i < upperChars.length; i++) {
        const char = upperChars[i];
        if (username.includes(char)) return true;
    }

    return false;
};

/**
 * valid username is:
 * - longer than 8 characters
 * - does not contain an invalid character
 * - INVALID CHARCTERS: !@#$%^&*()_+=-|{}[]:;<>?,./
 */
const isValidUsername = (username) => {
    switch (true) {
        case username.length < 8:
            return false;
        case containsInvalidCharacters(username):
            return false;
        // it must contain at least 1 lower case letter
        case !containsLowerCaseLetters(username):
            return false;
        // it must contain at least 1 upper case letter
        case !containsUpperCaseLetters(username):
            return false;
        default:
            return true; // <-- i want to get here
    }
};

// if username length is less than 8, it should return false
// if it contains any of the invalid characters, it should return false
// otherwise return true

// what you want to give isValidUsername, and what do you expect in return?
// we want to give it a string, and expect a boolean in return
// expect().toBe(true) OR expect( // FILL THIS IN ).toBe(false)
// expect( <---  ---> )

// what is the happy path of isValidUsername ?
// the given username is more than 7 characters
// the given username has no invalid characters
// const USERNAME = "gabrielang"
// give it to the function
// isValidUsername(USERNAME) -> expect a boolean
//

module.exports = {
    isValidUsername,
};
