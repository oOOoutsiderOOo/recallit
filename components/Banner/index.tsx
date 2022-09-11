import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const Banner = () => {
    return (
        <View style={styles.banner}>
            <Text style={styles.text}>Book now and get 30% off you next VirtualMeal™!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: "#f72585",
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        fontWeight: "600",
        color: "#020f13",
    },
});

export default Banner;
