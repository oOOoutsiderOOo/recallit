import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { colors } from "../../constants/colors";

export function Trip({ trip, setTrips, trips }) {
    const handleFav = () => {
        const tempTrips = trips.map(item => {
            if (item.id === trip.id) {
                return { ...item, fav: !item.fav };
            }
            return item;
        });
        setTrips([...tempTrips]);
    };

    return (
        <TouchableOpacity style={styles.tripCard}>
            <ImageBackground source={trip.image} resizeMode="cover" style={styles.image}>
                <View style={styles.cardTopRow}>
                    <TouchableOpacity style={styles.fav} onPress={() => handleFav()}>
                        <Image source={trip.fav ? require("../../assets/icons/favouriteF.png") : require("../../assets/icons/favourite.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.blackBottom}>
                    <Text style={styles.tripText}>{trip.text}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const NextTrip = ({ trips, setTrips }) => {
    return (
        <>
            <Text style={styles.title}>Featured Experiences</Text>
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                {trips.map(trip => {
                    return <Trip key={trip.id} trip={trip} trips={trips} setTrips={setTrips} />;
                })}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        /* paddingTop: 35, */
        padding: 20,
        backgroundColor: colors.backgroundDark,
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
    },

    title: {
        color: colors.white,
        fontFamily: "Poppins-Bold",
        marginLeft: 20,
        marginTop: 20,
    },

    tripCard: {
        borderRadius: 10,
        borderWidth: 0,
        flex: 1,
        overflow: "hidden",
        width: 200,
        height: 200,
        marginRight: 20,
        marginEnd: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        backgroundColor: colors.lightBlue,
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
        fontSize: 12,
        color: colors.white,
        paddingHorizontal: 10,
        fontFamily: "Poppins-Regular",
    },
});

export default NextTrip;
