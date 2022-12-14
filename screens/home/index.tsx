import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Feature, NextTrip, CheapTrips, BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";

export default function Home({ navigation }) {
    return (
        <>
            <ScrollView style={styles.ScrollViewContainer}>
                <Feature />
                <NextTrip navigation={navigation} />
                <CheapTrips navigation={navigation} />
            </ScrollView>
            <BottomBar navigation={navigation} selectedTab="home" />
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
