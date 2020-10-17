import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByAtrr, checkProp } from '../../test/test.utils';


Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
    success: false,
}
/** 
 * Factory function that creates a ShalowWrapper for the Congrats component
 * @function setup
 * @returns {ShallowWrapper}
 * @params {object} props
 */ 

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />);
}

test('renders without error', ()=>{
    const wrapper = setup({success: true});
    const component = findByAtrr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', ()=>{
    const wrapper = setup({ success: false });
    const component = findByAtrr(wrapper, 'component-message').text();
    expect(component).toBe('');
    
});
test('renders non-empty congrats message when `success` prop is true', ()=>{
    const wrapper = setup({ success: true });
    const message = findByAtrr(wrapper, 'component-message').text();
    expect(message.length).not.toBe("0");
});
test('does not throw warning with expected props', () => {
    const expectedProps = { success: false};
    checkProp(Congrats, expectedProps);
});


