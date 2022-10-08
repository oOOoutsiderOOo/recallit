import cartData from "../../backend/data/cart";
import { cartTypes } from "../types";

const initialState = cartData;
const { ADD_ITEM, REMOVE_ITEM } = cartTypes;

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REMOVE_ITEM:
            return state.filter(trip => trip.id !== action.tripId);

        case ADD_ITEM:
            if (state.find(trip => trip.id === action.trip.id)) return state;
            return [...state, action.trip];

        //TODO agregar modales

        default:
            return state;
    }
};

export default cartReducer;
