import {combineReducers} from 'redux';
import guessedWordReducer from './guessedWordReducer/guessedWordReducer';
import successReducer from './successReducer/successReducer';

const rootReducer = combineReducers({
    successReducer,
    guessedWordReducer,
})

export default rootReducer;