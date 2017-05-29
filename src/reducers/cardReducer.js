/**
 * Created by thiago on 26/03/2017.
 */
import { actionTypes } from '../actions/cardActionsTypes';

const initialState = {
    cards: [],
};



const actionsMap = {

    [actionTypes.STORE_CARD]: (state, action) => {

        let cards        = state.cards;
        if (!cards) cards = [];

        cards.push(action.card) ;

        return {...state, cards: [...cards]};

    },


};


export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}