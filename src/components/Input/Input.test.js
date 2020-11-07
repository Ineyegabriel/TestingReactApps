import React from 'react';
import {shallow} from 'enzyme';
import { findByAtrr, storeFactory } from '../../test/test.utils';
import Input from './Input';

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


describe('update state', () => {
    
});
