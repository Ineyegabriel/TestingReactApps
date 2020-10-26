import {actionTypes} from '../';

/**
 * Action creators for correct guess
 * @function correctGuess
 * @param {string} action 
 * @param {object} payload 
 * @returns {object}
 */
export const correctGuess = () => ({
    type: actionTypes.CORRECT_GUESS
});