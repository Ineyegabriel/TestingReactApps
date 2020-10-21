import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({success}) => (
    <div data-test="component-congrats" className="alert alert-success">
        <span data-test="component-message"> 
            {success && `Congratulations! You guessed the correct word` }
        </span>    
    </div>   
);

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;