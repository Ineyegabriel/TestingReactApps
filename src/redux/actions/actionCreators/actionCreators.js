import {actionTypes} from '../';
import { getLetterMatchCount } from '../../../helpers';
import axios from 'axios';
/**
 * Redux thunk function that dispatches guessword action  
 * and conditionally correct guess action 
 * @function guessWord
 * @param {string} guessedWord 
 * @returns {function}  
 */
export const guessWord = (guessedWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {guessedWord,letterMatchCount}
        });
        if(guessedWord === secretWord){
            dispatch({type: actionTypes.CORRECT_GUESS})
        } 
    }
};

export const getSecretWord = () => (
    dispatch => {
        return axios.get('http://localhost:3030/')
        .then(response => {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: response.data
            })
        });
    }
)