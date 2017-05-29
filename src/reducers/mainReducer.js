/**
 * Created by thiag on 14/05/2017.
 */

import {actionTypes} from '../actions/mainActionsTypes';

const initialState = {
    isLoading: false,
    err     : ""
};


const actionsMap = {

    [actionTypes.ERROR_MESSAGE]  : (state, action) => {
        let messages = action.msg;
        if (action.status === 401) {
            return {...state, err: messages, isLoading: false};
        }
        return {...state, err: messages, isLoading: false};
    },
    [actionTypes.LOADING_MESSAGE]: (state, action) => {
        return {...state, err: "", isLoading: true};
    },
    [actionTypes.SUCCESS_MESSAGE]: (state, action) => {
        console.log("main action", action);
        return {...state, err: "", isLoading: false};

    },


};

export default function reducer(state = initialState, action = {}) {

    let fn;
    switch (true) {
        case action.type.endsWith('_ERROR'):
            fn = actionsMap[actionTypes.ERROR_MESSAGE];
            break;
        case  action.type.endsWith('LOADING'):
            fn = actionsMap[actionTypes.LOADING_MESSAGE];
            break;
        case  action.type.endsWith('SUCCESS'):
            fn = actionsMap[actionTypes.SUCCESS_MESSAGE];
            break;
        default:
            fn = actionsMap[action.type];
            break

    }

    return fn ? fn(state, action) : state;
}