import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func,
};
const defaultProps = {
    onCreate: () => console.warn('onCreate not defined'),
    onRemove: () => console.warn('onRemove not defined')
};

const Buttons = ({onCreate, onRemove}) => {
    return (
        <div className="Buttons">
            <div className="btn add" onClick={onCreate}>
                Create
            </div>
            <div className="btn remove" onClick={onRemove}>
                Remove
            </div>
        </div>
    )
};

Buttons.propTypes = propTypes;
Buttons.defaultProps = defaultProps;
export default Buttons;