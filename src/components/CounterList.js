import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import './CounterList.css';

const propTypes = {
    counters: PropTypes.ArrayOf(PropTypes.shape({
        color: PropTypes.string,
        number: PropTypes.number
    })),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
};
const defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined')
};

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {
    const counterList =  counters.map(({counter, index}) => {
        return <Counter
            key={index}
            index={index}
            {...counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}/>
    });

    return (
        <div className="CounterList">
            {counterList}
        </div>
    )
};

CounterList.propTypes = propTypes;
CounterList.defaultProps = defaultProps;

export default CounterList;