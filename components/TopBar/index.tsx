import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>reKall/it</Text>
                <Ionicons name="cart-outline" size={28} color={colors.white} />
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
        fontFamily: "Poppins-Regular",
    },
    navMenu: {},
    userMenu: {},
});

export default TopBar;
