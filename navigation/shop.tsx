import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DetailedView, Home, Favorites, Search, Cart, Account } from "../screens/index";
import { Banner, TopBar } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailedView" component={DetailedView} />
        </Stack.Navigator>
    );
};

const FavsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Fav" component={Favorites} />
            <Stack.Screen name="DetailedView" component={DetailedView} />
        </Stack.Navigator>
    );
};

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="DetailedView" component={DetailedView} />
        </Stack.Navigator>
    );
};

const CartStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};

const AccountStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    );
};

const ShopNavigator = () => {
    return (
        <>
            <TopBar />
            <Banner />
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                }}>
                <Tab.Screen name="HomeTab" component={HomeStack} />
                <Tab.Screen name="FavTab" component={FavsStack} />
                <Tab.Screen name="SearchTab" component={SearchStack} />
                <Tab.Screen name="CartTab" component={CartStack} />
                <Tab.Screen name="AccountTab" component={AccountStack} />
            </Tab.Navigator>
        </>
    );
};

export default ShopNavigator;
