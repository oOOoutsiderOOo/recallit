import React from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import AppNavigator from "./navigation";
import store from "./store";

export default function App() {
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
        <Provider store={store}>
            <AppNavigator />
            <StatusBar style="light" />
        </Provider>
    );
}
