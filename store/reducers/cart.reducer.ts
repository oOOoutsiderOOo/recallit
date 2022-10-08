import { cartTypes } from "../types";

const initialState = [];
const { ADD_ITEM, REMOVE_ITEM, GET_CART_CONTENTS } = cartTypes;

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CART_CONTENTS:
            const cart = Object.values(action.cartContents);
            return cart;

        case REMOVE_ITEM:
            return state.filter(trip => trip.id !== action.tripId);

        case ADD_ITEM:
            if (state.find(trip => trip.id === action.trip.id)) return state;
            console.log(action.trip);
            return [...state, action.trip];

        //TODO agregar modales

        default:
            return state;
    }
};

export default cartReducer;
