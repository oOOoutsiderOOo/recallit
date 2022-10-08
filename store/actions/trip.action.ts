import { tripTypes } from "../types/index";

const { SELECT_TRIP, SET_FAV } = tripTypes;

export const selectTrip = (id: number) => ({
    type: SELECT_TRIP,
    tripId: id,
});

export const setFav = (id: number) => ({
    type: SET_FAV,
    tripId: id,
});
