import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Favorites from "../screens/favorites";
import DetailedView from "../screens/detailedView";
import Search from "../screens/search";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailedView" component={DetailedView} />
        </Stack.Navigator>
    );
};

const FavsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Fav" component={Favorites} />
            <Stack.Screen name="DetailedView" component={DetailedView} />
        </Stack.Navigator>
    );
};

const SearchStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="DetailedView" component={DetailedView} />
        </Stack.Navigator>
    );
};

const ShopNavigator = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                }}>
                <Tab.Screen name="HomeTab" component={HomeStack} />
                <Tab.Screen name="FavTab" component={FavsStack} />
                <Tab.Screen name="SearchTab" component={SearchStack} />
            </Tab.Navigator>
        </>
    );
};

export default ShopNavigator;
