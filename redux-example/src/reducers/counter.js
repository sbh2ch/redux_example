/**
 * Created by kiost on 2017-06-13.
 */
import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};
/* how to set the default arguments :
 * insert "= value" after the parameter which want to set a default arguments
 * so, it's same with
 * if(state === undefined){
 *   state = initialState;
 * }
 * &
 * func (state = initialState, param1, .. ){...}
 * */
export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                dumbObject: {...state.dumbObject, u: 0}
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
};

