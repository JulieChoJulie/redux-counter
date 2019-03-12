import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    colorData: color,
});


/* store ->
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
 */


export default reducers;
