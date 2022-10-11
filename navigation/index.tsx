import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./shop";
import { TopBar, Banner } from "../components";
import AuthNavigator from "./auth";

const AppNavigator = () => {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <NavigationContainer>
            <TopBar />
            <Banner />
            {isLogged ? <AuthNavigator /> : <ShopNavigator />}
        </NavigationContainer>
    );
};

export default AppNavigator;
