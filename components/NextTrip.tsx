import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";

const tripsData = [
    {
        image: "../assets/images/locations/underCity.jpg",
        text: "Live the 40's in this amazing underwater city!",
        fav: false,
    },
    {
        image: "../assets/images/locations/desert.jpg",
        text: "Get hot (very hot) in the infinite desert",
        fav: false,
    },
    {
        image: "../assets/images/locations/postField.jpg",
        text: "Find a moment to relax in this old farm (before the next bomb drops)",
        fav: false,
    },
];

const NextTrip = () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.tripCard}>
                <ImageBackground source={require("../assets/images/locations/underCity.jpg")} resizeMode="cover" style={styles.image}>
                    <View style={styles.cardTopRow}>
                        <TouchableOpacity style={styles.fav}>
                            <Image source={require("../assets/icons/favourite.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.blackBottom}>
                        <Text style={styles.tripText}>Live the 40's in this amazing underwater city!</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tripCard}>
                <ImageBackground source={require("../assets/images/locations/desert.jpg")} resizeMode="cover" style={styles.image}>
                    <View style={styles.blackBottom}>
                        <Text style={styles.tripText}>Get hot (very hot) in the infinite desert</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tripCard}>
                <ImageBackground source={require("../assets/images/locations/postField.jpg")} resizeMode="cover" style={styles.image}>
                    <View style={styles.blackBottom}>
                        <Text style={styles.tripText}>Find a moment to relax in this old farm (before the next bomb drops)</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        /* paddingTop: 35, */
        padding: 20,
        backgroundColor: "#020f13",
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
    },

    tripCard: {
        backgroundColor: "#4cc9f0",
        borderRadius: 10,
        borderWidth: 3,
        flex: 1,
        overflow: "hidden",
        width: 200,
        height: 200,
        marginRight: 20,
        marginEnd: 20,
    },

    image: {
        justifyContent: "space-between",
        alignItems: "center",
        height: 200,
        borderRadius: 20,
    },

    cardTopRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 5,
        height: 50,
        width: "100%",
        overflow: "hidden",
    },

    fav: {
        width: 40,
        height: 40,
        overflow: "hidden",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },

    blackBottom: {
        width: "100%",
        backgroundColor: "#020f13AA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
    },

    tripText: {
        color: "white",
    },
});

export default NextTrip;
