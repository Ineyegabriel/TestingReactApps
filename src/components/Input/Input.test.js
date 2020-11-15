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
    test('check that input dispatches `guessWord` action on button click', () => {
        const guessWordMock = jest.fn(); 
        const props ={
            guessWord: guessWordMock
        }
        const wrapper = shallow(<UnconnectedInput {...props}/>)
        const submitButton = findByAtrr(wrapper, 'submit-button');
        submitButton.simulate('click');

        const guessWordCallMock = guessWordMock.mock.calls.length;
        expect(guessWordCallMock).toBe(1);
    })
})
