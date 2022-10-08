import tripsData from "../../backend/data/tripsData";
import { Trip, Trips } from "../../types/trips";
import { tripTypes } from "../types";

const { SELECT_TRIP, SET_FAV } = tripTypes;

type InitialState = {
    trips: Trips;
    selectedTrip?: Trip | any;
};

const initialState: InitialState = {
    trips: tripsData,
    selectedTrip: {},
};

const tripsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SELECT_TRIP:
            const indexTrip = state.trips.findIndex(trip => trip.id === action.tripId);
            if (indexTrip === -1) return state;
            return {
                ...state,
                selectedTrip: state.trips[indexTrip],
            };

        case SET_FAV:
            const tempTrips = state.trips.map(item => {
                if (item.id === action.tripId) {
                    return { ...item, fav: !item.fav };
                }
                return item;
            });

            return { ...state, trips: tempTrips };

        default:
            return state;
    }
};

export default tripsReducer;
