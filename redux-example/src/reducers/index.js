/**
 * Created by kiost on 2017-06-13.
 */
import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});

export default reducers;