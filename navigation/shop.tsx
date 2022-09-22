import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Favorites from "../screens/favorites";
import DetailedView from "../screens/detailedView";
import { BottomBar } from "../components";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Fav" component={Favorites} />
                <Stack.Screen name="DetailedView" component={DetailedView} />
            </Stack.Navigator>
        </>
    );
};

export default ShopNavigator;
