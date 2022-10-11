import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ShopNavigator from "./shop";
import AuthNavigator from "./auth";

const AppNavigator = () => {
    const userId = useSelector(state => state.auth.userId);

    return <NavigationContainer>{userId ? <ShopNavigator /> : <AuthNavigator />}</NavigationContainer>;
};

export default AppNavigator;
