import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Feature, NextTrip } from "../components/index";
import { colors } from "../constants/colors";

export default function Home({ trips, setTrips }) {
    return (
        <>
            <ScrollView style={styles.ScrollViewContainer}>
                <Feature />
                <NextTrip trips={trips} setTrips={setTrips} />
                {/* <List /> */}
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
