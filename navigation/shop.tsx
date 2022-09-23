import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Favorites from "../screens/favorites";
import DetailedView from "../screens/detailedView";

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
