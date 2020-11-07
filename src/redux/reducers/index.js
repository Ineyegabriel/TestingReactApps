import {combineReducers} from 'redux';
import guessedWordReducer from './guessedWordReducer/guessedWordReducer';
import secretWordReducer from './secretWordReducer/secretWordReducer';
import successReducer from './successReducer/successReducer';

const rootReducer = combineReducers({
    success: successReducer,
    guessedWords: guessedWordReducer,
    secretWord: secretWordReducer
})

export default rootReducer;