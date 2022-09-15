import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Banner, TopBar, BottomBar } from "./components/index";
import Home from "./screens/home";
import Favourites from "./screens/favourites";
import SwipeGesture from "./screens/swypeTest";
import { useFonts } from "expo-font";

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

const tripsData: Trips = [
    {
        id: 0,
        image: require("./assets/images/locations/underCity.jpg"),
        text: "Live the 40's in this amazing underwater city!",
        fav: true,
        price: "1BTC",
        realDuration: "1min",
        virtualDuration: "1week",
    },
    {
        id: 1,
        image: require("./assets/images/locations/desert.jpg"),
        text: "Get hot (very hot) in the infinite desert",
        fav: false,
        price: "1BTC",
        realDuration: "1min",
        virtualDuration: "1week",
    },
    {
        id: 2,
        image: require("./assets/images/locations/postField.jpg"),
        text: "Find a moment to relax in this old farm (before the next bomb drops)",
        fav: true,
        price: "1BTC",
        realDuration: "1min",
        virtualDuration: "1week",
    },
];

export default function App() {
    const [trips, setTrips] = useState(tripsData);
    const [screen, setScreen] = useState("fav");
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
            {screen === "swipe" && <SwipeGesture />}
            <BottomBar setScreen={setScreen} />
            <StatusBar style="light" />
        </>
    );
}
