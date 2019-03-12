import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black',
    number: 0,
};

/*
reducer function: parameters: state and action

if state === undefined ( when store is being created)
    return initialState

based on action.type -> we create new state and return
*/


function counter(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
            ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
};

export default counter;