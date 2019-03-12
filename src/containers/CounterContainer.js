import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor} from '../utils';

// state in store is passed as props
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number,
});

/*
   create actions using action creators
   make a function to dispatch each action
 */

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

/*
    CounterContainer binds data layer and Counter component
 */

const CounterContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;