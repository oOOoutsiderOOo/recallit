import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";

const Feature = () => {
    return (
        <View style={styles.featureContainer}>
            <TouchableOpacity style={styles.featureCard}>
                <ImageBackground source={require("../../assets/images/locations/1.jpg")} resizeMode="cover" style={styles.image}>
                    <View style={styles.blackBottom}>
                        <Text style={styles.featureText}>Get inside of your best vacation trip ever</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    featureContainer: {
        paddingTop: 35,
        padding: 20,
        backgroundColor: colors.primary,
    },

    featureCard: {
        backgroundColor: colors.lightBlue,
        borderRadius: 10,
        borderWidth: 0,
        flex: 1,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },

    image: {
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 10,
        height: 100,
        borderRadius: 20,
    },

    blackBottom: {
        width: "100%",
        backgroundColor: "#020f1388",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },

    featureText: {
        color: colors.white,
        fontWeight: "bold",
    },
});

export default Feature;
