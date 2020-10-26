import React from 'react';
import {shallow} from 'enzyme';
import { findByAtrr, storeFactory } from '../../test/test.utils';
import Input from './Input';

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
        test('renders component without error',() =>{

        });
        test('renders input box',() =>{

        });
        test('renders submit button',() =>{

        });
        
    });
    describe('word has being guessed', () => {
        test('renders component without error',() =>{

        });
        test('does not render input box',() =>{

        });
        test('does not render submit button',() =>{

        });
        
    })
});

describe('update state', () => {

});
