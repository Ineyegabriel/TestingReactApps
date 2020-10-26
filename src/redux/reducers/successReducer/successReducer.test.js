import { actionTypes } from '../../actions';
import successReducer from './successReducer';

describe('successReducer', () => {

    test('return default intial state of `false` when no action type is recieved',() => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false);
    });
    
    test('return of `true` after recieving action of type `CORRECT_GUESS`',() =>{
        const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})
        expect(newState).toBe(true)
    });
})




