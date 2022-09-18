import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Feature, NextTrip, CheapTrips } from "../components/index";
import { colors } from "../constants/colors";

export default function Home({ trips, setTrips, setScreen, setSelectedTrip }) {
    return (
        <>
            <ScrollView style={styles.ScrollViewContainer}>
                <Feature />
                <NextTrip trips={trips} setTrips={setTrips} setScreen={setScreen} setSelectedTrip={setSelectedTrip} />
                {/* <List /> */}
                <CheapTrips trips={trips} setTrips={setTrips} setScreen={setScreen} setSelectedTrip={setSelectedTrip} />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    ScrollViewContainer: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
    },
    container: {
        flex: 1,
        backgroundColor: colors.backgroundDark,
        alignItems: "center",
        justifyContent: "center",
        color: colors.white,
    },
});
