/**
 * function that helps to count how many letters has being matched in a guessed word,
 * and return the total matched count as a number
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret word
 * @return {number}
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
    const guessedLetterSet = new Set(secretWord.split(''));
    const secretLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
};