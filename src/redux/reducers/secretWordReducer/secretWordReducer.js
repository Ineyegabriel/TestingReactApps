import {actionTypes} from '../../actions/';
/**
 * @function {secretWordReducer}n - secret Word reducers
 * @param {string} state 
 * @param {object} action 
 * @returns {string} secretWord
 */

const secretWordReducer = (state = null, action) => {
    switch(action.type){
        case actionTypes.SET_SECRET_WORD:
            return action.payload    
        default:
        return state;
    }
}
export default secretWordReducer ;