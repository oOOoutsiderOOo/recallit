import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Banner, TopBar, BottomBar } from "./components/index";
import Home from "./screens/home";
import Favourites from "./screens/favourites";
import { useFonts } from "expo-font";
import featTripsData from "./backend/data/featTrips";

export type Trip = {
    id: number;
    image: any;
    text: string;
    fav: boolean;
    price: string;
    realDuration: string;
    virtualDuration: string;
};

export type Trips = Trip[];

export default function App() {
    const [trips, setTrips] = useState(featTripsData);
    const [screen, setScreen] = useState("home");
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
            {screen === "home" && <Home trips={trips} setTrips={setTrips} />}
            {screen === "fav" && <Favourites trips={trips} />}
            <BottomBar setScreen={setScreen} />
            <StatusBar style="light" />
        </>
    );
}
