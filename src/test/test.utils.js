import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../redux/reducers/";

/**
 * Creating a store for testing purposes with imported reducers, middleware, initial state
 * globals: rootReducer
 * @function storeFactory
 * @param {object} initialState 
 * @returns {store} - Redux store
 */
export const storeFactory = (initialState) => (
  createStore(rootReducer, initialState)
);
  
/**
 * Function to implement the the find util from jest
 *  @param {string} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByAtrr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProp = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

