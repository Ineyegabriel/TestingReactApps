import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../redux/configureStore";
import rootReducer from "../redux/reducers/";


/**
 * Creating a store for testing purposes with imported reducers, middleware, initial state
 * globals: rootReducers and middlewares
 * @function storeFactory
 * @param {object} initialState 
 * @returns {store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState)
} 

  
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

