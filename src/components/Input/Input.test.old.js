import React from 'react';
import {shallow} from 'enzyme';
import { findByAtrr, storeFactory } from '../../test/test.utils';
import Input from './Input.old';

/**
 * Factory Function that returns a Shallow wrapper which utilizes the Jest shallow function
 * @function - setup
 * @param {object} - initailState 
 * @return {ShallowWrapper} - wrapper
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}

describe('render', () => {   
    describe('word has not being guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState)
        });
        test('renders component without error',() =>{
            const component = findByAtrr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box',() =>{
            const inputBox = findByAtrr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button',() =>{
            const submitButton = findByAtrr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
        
    });

    describe('word has being guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test('renders component without error', () =>{
            const component = findByAtrr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', () =>{
            const inputBox = findByAtrr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('does not render submit button', () =>{
            const submitButton = findByAtrr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
        
    });

});

describe('update state', () => {

});
