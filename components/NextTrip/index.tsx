import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";

const tripsData = [
    {
        image: require("../../assets/images/locations/underCity.jpg"),
        text: "Live the 40's in this amazing underwater city!",
        fav: false,
    },
    {
        image: require("../../assets/images/locations/desert.jpg"),
        text: "Get hot (very hot) in the infinite desert",
        fav: false,
    },
    {
        image: require("../../assets/images/locations/postField.jpg"),
        text: "Find a moment to relax in this old farm (before the next bomb drops)",
        fav: false,
    },
];

export function Trip({ trip }) {
    const [isFav, setIsFav] = useState(trip.fav);

    return (
        <TouchableOpacity style={styles.tripCard}>
            <ImageBackground source={trip.image} resizeMode="cover" style={styles.image}>
                <View style={styles.cardTopRow}>
                    <TouchableOpacity style={styles.fav} onPress={() => setIsFav(!isFav)}>
                        <Image source={isFav ? require("../../assets/icons/favouriteF.png") : require("../../assets/icons/favourite.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.blackBottom}>
                    <Text style={styles.tripText}>{trip.text}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const NextTrip = () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            {tripsData.map(trip => {
                return <Trip trip={trip} />;
            })}
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
        borderWidth: 0,
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
