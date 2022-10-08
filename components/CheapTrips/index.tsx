import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import { images } from "../../constants/images";
import { selectTrip, setFav } from "../../store/actions/trip.action";
import { Trip, Trips } from "../../types/trips";

export function TripItem({ trip, navigation }: { trip: Trip; navigation: any }) {
    const dispatch = useDispatch();

    const handleFav = (id: number) => {
        dispatch(setFav(id));
    };

    const handleSelectItem = (selectedTrip: Trip) => {
        dispatch(selectTrip(selectedTrip.id));
        navigation.navigate("DetailedView");
    };

    return (
        <TouchableOpacity style={styles.tripCard} onPress={() => handleSelectItem(trip)}>
            <ImageBackground source={images[trip.image]} resizeMode="cover" style={styles.image}>
                <View style={styles.cardTopRow}>
                    <TouchableOpacity style={styles.fav} onPress={() => handleFav(trip.id)}>
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

const CheapTrips = ({ navigation }) => {
    const trips: Trips = useSelector(state => state.trips.trips);

    return (
        <>
            <Text style={styles.title}>Short on money? Try our economic trips!</Text>
            <ScrollView
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}>
                {trips
                    .filter((trip: Trip) => trip.type === "cheap")
                    .map((trip: Trip) => {
                        return <TripItem key={trip.id} trip={trip} navigation={navigation} />;
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
