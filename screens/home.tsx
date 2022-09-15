import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Feature, NextTrip, CheapTrips } from "../components/index";
import { colors } from "../constants/colors";

export default function Home({ trips, setTrips, cheapTrips, setCheapTrips }) {
    return (
        <>
            <ScrollView style={styles.ScrollViewContainer}>
                <Feature />
                <NextTrip trips={trips} setTrips={setTrips} />
                {/* <List /> */}
                <CheapTrips trips={cheapTrips} setTrips={setCheapTrips} />
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
