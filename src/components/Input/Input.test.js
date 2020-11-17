import React from 'react';
import {shallow} from 'enzyme';
import { findByAtrr, storeFactory } from '../../test/test.utils';
import Input, {UnconnectedInput} from './Input';

const setup = (initialState={})=> {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}

describe('render', () => {

    describe('Word is has not being guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByAtrr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const inputBox = findByAtrr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button', () => {
            const submitButton = findByAtrr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });

    describe('Word is has being guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        })
        test('renders component without error', () => {
            const component = findByAtrr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', () => {
            const inputBox = findByAtrr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });

        test('does not render submit button', () => {
            const submitButton = findByAtrr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        });
    })

});


describe('redux props', () => {
    test('has success piece of state as props', () =>{
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });

    test('`guessWord` action creator exists and it is a function', () => {
        const wrapper = setup();
        const guessedWordProp = wrapper.instance().props.guessWord;
        expect(guessedWordProp).toBeInstanceOf(Function);
    })
});

describe('`guessWord` action creator called', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';

    beforeEach(() => {
        guessWordMock = jest.fn(); 
        const props ={
            guessWord: guessWordMock
        }
        wrapper = shallow(<UnconnectedInput {...props}/>);

        //add value to the input box
        wrapper.setState({currentGuess: guessedWord})
        const submitButton = findByAtrr(wrapper, 'submit-button');
        submitButton.simulate('click',{preventDefault(){}});
    })
    test('check that  `guessWord` was called once', () => {
        const guessWordCallMock = guessWordMock.mock.calls.length;
        expect(guessWordCallMock).toBe(1);
    });
    test('calls `guessWord with input value as argument`', () => {
        const guessedWordArg = guessWordMock.mock.calls[0][0];
        expect(guessedWordArg).toBe(guessedWord);
    });
    test('checking that input box is cleared on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('');
    })
})
