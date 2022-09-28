import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";

const bottomBar = ({ navigation }) => {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Image style={styles.buttonImage} source={require("../../assets/icons/home.png")} resizeMode="contain" />
                <Text style={styles.logoText}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Search")}>
                <Image style={styles.buttonImage} source={require("../../assets/icons/search.png")} resizeMode="contain" />
                <Text style={styles.logoText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Fav")}>
                <Image style={styles.buttonImage} source={require("../../assets/icons/favW.png")} resizeMode="contain" />
                <Text style={styles.logoText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.buttonImage} source={require("../../assets/icons/user.png")} resizeMode="contain" />
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
