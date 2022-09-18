import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Banner, TopBar, BottomBar } from "./components/index";
import { useFonts } from "expo-font";
import tripsData from "./backend/data/tripsData";
import Home from "./screens/home";
import Favorites from "./screens/favorites";
import DetailedView from "./screens/detailedView";

export type Trip = {
    id: number;
    image: any;
    text: string;
    fav: boolean;
    price: string;
    realDuration: string;
    virtualDuration: string;
    type: string;
};

export type Trips = Trip[];

export default function App() {
    const [trips, setTrips] = useState(tripsData);
    const [screen, setScreen] = useState("home");
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
        <>
            <TopBar />
            <Banner />
            {screen === "home" && <Home trips={trips} setTrips={setTrips} setScreen={setScreen} setSelectedTrip={setSelectedTrip} />}
            {screen === "fav" && <Favorites trips={trips} />}
            {screen === "detail" && <DetailedView selectedTrip={selectedTrip} setTrips={setTrips} trips={trips} />}
            <BottomBar setScreen={setScreen} />
            <StatusBar style="light" />
        </>
    );
}
