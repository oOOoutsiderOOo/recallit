import axios from "axios";
import { URL_API } from "../../constants/firebase";
import { Trip } from "../../types/trips";
import { cartTypes } from "../types";

const { ADD_ITEM, REMOVE_ITEM, GET_CART_CONTENTS } = cartTypes;

export const addItem = (trip: Trip) => {
    return async dispatch => {
        try {
            await axios.patch(`${URL_API}Trips.json`, { [trip.id]: trip });

            dispatch({
                type: ADD_ITEM,
                trip,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export const removeItem = (id: number) => ({
    type: REMOVE_ITEM,
    tripId: id,
});

export const getCartContents = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${URL_API}Trips.json`);
            dispatch({
                type: GET_CART_CONTENTS,
                cartContents: response.data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};
