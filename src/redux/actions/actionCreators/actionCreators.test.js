import moxios from 'moxios'
import {storeFactory} from '../../../test/test.utils';
import {getSecretWord} from './actionCreators';

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('add response word to state', () => {
        const secretWord = 'party';
        const store = storeFactory();
        
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord 
              });
        });
        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
            })
    });
});
