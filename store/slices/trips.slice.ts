import { createSlice } from "@reduxjs/toolkit";
import tripsData from "../../backend/data/tripsData";

export const tripsSlice = createSlice({
    name: "trips",
    initialState: {
        value: {
            trips: tripsData,
            selectedTrip: null,
        },
    },
    reducers: {
        selectTrip: (state, action) => {
            const indexTrip = state.value.trips.findIndex(trip => trip.id === action.payload.id);
            if (indexTrip === -1) {
                state.value = state.value;
            } else state.value.selectedTrip = state.value.trips[indexTrip];
        },

        setFav: (state, action) => {
            const index = state.value.trips.findIndex(trip => trip.id === action.payload.trip.id);
            state.value.trips[index].fav = !state.value.trips[index].fav;
            if (state.value.selectedTrip && state.value.trips[index].id === state.value.selectedTrip.id) {
                state.value.selectedTrip.fav = !state.value.selectedTrip.fav;
            }
        },
    },
});

export const { selectTrip, setFav } = tripsSlice.actions;

export default tripsSlice.reducer;
