import checkPropTypes from "check-prop-types";

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
