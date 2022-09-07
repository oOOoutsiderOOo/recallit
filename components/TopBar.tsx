import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>Recallit</Text>
            </View>
            <View style={styles.navMenu}></View>
            <View style={styles.userMenu}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        paddingTop: 35,
        padding: 20,
        backgroundColor: "#3a0ca3",
    },
    logoText: {
        color: "white",
    },
});

export default TopBar;
