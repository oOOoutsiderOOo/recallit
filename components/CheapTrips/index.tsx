import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { Trip, Trips } from "../../App";
import { colors } from "../../constants/colors";

export function TripItem({
    trip,
    setTrips,
    trips,
    setScreen,
    setSelectedTrip,
}: {
    trip: Trip;
    setTrips: Dispatch<SetStateAction<Trips>>;
    trips: Trips;
    setScreen: Dispatch<SetStateAction<string>>;
    setSelectedTrip: Dispatch<SetStateAction<Trip>>;
}) {
    const handleFav = () => {
        const tempTrips = trips.map(item => {
            if (item.id === trip.id) {
                return { ...item, fav: !item.fav };
            }
            return item;
        });
        setTrips([...tempTrips]);
    };

    const handleSelectItem = (selectedTrip: Trip) => {
        setSelectedTrip(selectedTrip);
        setScreen("detail");
    };

    return (
        <TouchableOpacity style={styles.tripCard} onPress={() => handleSelectItem(trip)}>
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

const CheapTrips = ({
    trips,
    setTrips,
    setScreen,
    setSelectedTrip,
}: {
    trips: Trips;
    setTrips: any;
    setScreen: Dispatch<SetStateAction<string>>;
    setSelectedTrip: Dispatch<SetStateAction<Trip>>;
}) => {
    return (
        <>
            <Text style={styles.title}>Short on money? Try our economic trips!</Text>
            <ScrollView
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}>
                {trips
                    .filter(trip => trip.type === "cheap")
                    .map(trip => {
                        return (
                            <TripItem
                                key={trip.id}
                                trip={trip}
                                trips={trips}
                                setTrips={setTrips}
                                setScreen={setScreen}
                                setSelectedTrip={setSelectedTrip}
                            />
                        );
                    })}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        /* paddingTop: 35, */
        /* padding: 20, */
        backgroundColor: colors.backgroundDark,
        flex: 1,
        flexDirection: "row",
        flexWrap: "nowrap",
    },

    contentContainer: {
        padding: 10,
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
        width: 150,
        height: 150,
        marginRight: 10,
        marginEnd: 10,
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
        height: 150,
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

export default CheapTrips;
