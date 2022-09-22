import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";
import { TopBar, Banner, BottomBar } from "../components";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TopBar />
            <Banner />
            <ShopNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
