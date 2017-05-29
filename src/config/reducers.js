/**
 * Created by thiago on 14/05/2017.
 */

import {combineReducers} from 'redux';
import cardReducer from '../reducers/cardReducer';
import mainReducer from '../reducers/mainReducer';





export default combineReducers({
    cardReducer,
    mainReducer,
});