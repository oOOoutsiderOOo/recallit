import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../constants/colors";

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>reKall/it</Text>
                <Image source={require("../../assets/icons/shopping-cart.png")} />
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
        backgroundColor: colors.primary,
    },
    logo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoText: {
        color: colors.white,
        fontSize: 20,
    },
});

export default TopBar;
