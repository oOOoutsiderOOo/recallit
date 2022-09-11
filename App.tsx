import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TopBar from "./components/TopBar";
import { Banner, Feature, NextTrip, List } from "./components/index";

export default function App() {
    return (
        <>
            <TopBar />
            <Banner />
            <ScrollView style={styles.ScrollViewContainer}>
                <Feature />
                <NextTrip />
                <List />
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
