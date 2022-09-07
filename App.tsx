import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TopBar from "./components/TopBar";
import Feature from "./components/Feature";
import NextTrip from "./components/NextTrip";

export default function App() {
    return (
        <>
            <TopBar />
            <ScrollView style={styles.ScrollViewContainer}>
                <Feature />
                <NextTrip />
            </ScrollView>
            <StatusBar style="light" />
        </>
    );
}

const styles = StyleSheet.create({
    ScrollViewContainer: {
        flex: 1,
        backgroundColor: "#020f13",
    },
    container: {
        flex: 1,
        backgroundColor: "#020f13",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
});
