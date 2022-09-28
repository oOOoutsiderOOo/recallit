import { Dispatch } from "react";
import { Trip, Trips } from "./trips";

export type tripsContext = {
    trips: Trips;
    setTrips: Dispatch<Trips>;
    setSelectedTrip: Dispatch<Trip>;
    selectedTrip: Trip;
};
