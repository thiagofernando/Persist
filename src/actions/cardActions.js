/**
 * Created by thiago on 26/03/2017.
 */


import store               from '../config/store';
import {actionTypes}       from './cardActionsTypes';


export const storeCard = (card) => {

    return store.dispatch(
        { type: actionTypes.STORE_CARD, card}
    )

};

