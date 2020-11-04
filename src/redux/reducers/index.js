import {combineReducers} from 'redux';
import guessedWordReducer from './guessedWordReducer/guessedWordReducer';
import successReducer from './successReducer/successReducer';

const rootReducer = combineReducers({
    success: successReducer,
    guessedWord: guessedWordReducer,
})

export default rootReducer;