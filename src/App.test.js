import React from 'react';
import {shallow} from 'enzyme';
import App, {UnconnectedApp} from './App';
import { findByAtrr, storeFactory } from './test/test.utils';


const setup = (state={}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<App store={store}/>).dive().dive();
    return wrapper;
}
setup();
describe('redux properties', () => {
 test('has access to `sucess` state', () => {
    let success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
 });

 test('has access to `secretWord` state', () => {
    let secretWord = 'party';
    const wrapper = setup({secretWord});
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
 });
 test('has access to `guessedWords` state', () => {
    let guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = setup({guessedWords});
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords)
 });
 test('`getSecretWord` action creator is a function on the props', () => {
     const wrapper = setup();
     const getSecretWordProp = wrapper.instance().props.getSecretWord;
     expect(getSecretWordProp).toBeInstanceOf(Function);
 })
});

test('`getSecretWord` runs on app mount', () => {
   const getSecretWordMock = jest.fn();
   const props = {
      success: false,
      guessedWords: [],
      getSecretWord: getSecretWordMock
   }
   //setup the app component with getSecretWordMock as the getSecretWord prop 
   const wrapper = shallow(<UnconnectedApp {...props}/>)

   //run the lifecycle method 
   wrapper.instance().componentDidMount();

   // check to see if mock ran
   const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

   expect(getSecretWordCallCount).toBe(1);
});