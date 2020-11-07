import {actionTypes} from '../../actions/';

/**
 * @function guessedWordReducer
 * @param {array} state 
 * @param {object} action 
 * @returns {array} new guessedWords state
 */
const guessedWordReducer = (state = [], action) => {
   switch(action.type){
       case actionTypes.GUESS_WORD :
        return [...state, action.payload];
        default: 
            return state;
   }
}
export default guessedWordReducer;