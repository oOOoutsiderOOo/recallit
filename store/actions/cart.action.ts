import { Trip } from "../../types/trips";
import { cartTypes } from "../types";

const { ADD_ITEM, REMOVE_ITEM } = cartTypes;

export const addItem = (trip: Trip) => ({
    type: ADD_ITEM,
    trip,
});

export const removeItem = (id: number) => ({
    type: REMOVE_ITEM,
    tripId: id,
});
