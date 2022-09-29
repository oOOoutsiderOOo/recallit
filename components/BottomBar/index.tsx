import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors";

const bottomBar = ({ navigation, selectedTab }) => {
    const [focused, seFocused] = useState(selectedTab);

    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeTab", { screen: "Home" })}>
                <Ionicons name={focused === "home" ? "home" : "home-outline"} size={20} color={colors.white} />
                <Text style={styles.logoText}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SearchTab", { screen: "Search" })}>
                <Ionicons name={focused === "search" ? "search" : "search-outline"} size={20} color={colors.white} />

                <Text style={styles.logoText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FavTab", { screen: "Fav" })}>
                <Ionicons name={focused === "fav" ? "heart" : "heart-outline"} size={20} color={colors.white} />

                <Text style={styles.logoText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Ionicons name={focused === "user" ? "person" : "person-outline"} size={20} color={colors.white} />

                <Text style={styles.logoText}>Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: colors.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
    buttonImage: {
        height: 20,
    },
    logoText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: "Poppins-Regular",
    },
});

export default bottomBar;
