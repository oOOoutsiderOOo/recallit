import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import tripsData from "./backend/data/tripsData";
import AppNavigator from "./navigation";
import { Trip } from "./types/trips";
import { TripsContext } from "./contexts/TripsContext";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
    const [trips, setTrips] = useState(tripsData);
    const [selectedTrip, setSelectedTrip] = useState<Trip | {}>({});
    const [loaded] = useFonts({
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });

    if (!loaded) {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <Provider store={store}>
            <TripsContext.Provider value={{ trips, setTrips, setSelectedTrip, selectedTrip }}>
                <AppNavigator />
                <StatusBar style="light" />
            </TripsContext.Provider>
        </Provider>
    );
}
