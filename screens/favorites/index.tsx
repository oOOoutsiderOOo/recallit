import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";
import { Trip, Trips } from "../../types/trips";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../constants/images";
import { selectTrip } from "../../store/slices/trips.slice";

export default function Favorites({ navigation }) {
    const dispatch = useDispatch();

    const trips: Trips = useSelector(state => state.trips.value.trips);

    const handleSelectItem = (selectedTrip: Trip) => {
        dispatch(selectTrip({ id: selectedTrip.id }));
        navigation.push("DetailedView");
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Favorites</Text>
            </View>
            <ScrollView style={styles.ScrollViewContainer}>
                {trips
                    .filter(trip => trip.fav === true)
                    .map(trip => {
                        return (
                            <TouchableOpacity style={styles.card} key={trip.id} onPress={() => handleSelectItem(trip)}>
                                <Image source={images[trip.image]} resizeMode="cover" style={styles.image}></Image>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{trip.text}</Text>
                                    <View style={styles.secondRowContainer}>
                                        <View style={styles.durationContainer}>
                                            <Text style={styles.duration}>In flesh duration: {trip.realDuration}</Text>
                                            <Text style={styles.duration}>Perceived duration: {trip.virtualDuration}</Text>
                                        </View>
                                        <Text style={styles.price}>Price {trip.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                {!trips.filter(trip => trip.fav === true)[0] && <Text style={styles.empty}>Start adding some favs!</Text>}
            </ScrollView>
            <BottomBar navigation={navigation} selectedTab="fav" />
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        height: 100,
        justifyContent: "center",
    },
    headerTitle: {
        color: colors.white,
        fontFamily: "Poppins-Bold",
        fontSize: 34,
        padding: 20,
    },
    ScrollViewContainer: {
        backgroundColor: colors.backgroundDark,
    },
    card: {
        height: 100,
        marginTop: 20,
        marginHorizontal: 5,
        flexDirection: "row",
        backgroundColor: colors.primary,
        borderRadius: 5,
        overflow: "hidden",
    },
    image: {
        height: 100,
        width: 100,
    },
    textContainer: {
        width: "70%",
        height: 100,
        marginLeft: 10,
        padding: 5,
        justifyContent: "space-between",
    },
    secondRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },

    durationContainer: {},

    title: {
        color: colors.white,
        fontFamily: "Poppins-Regular",
    },

    duration: {
        color: colors.gray,
        fontSize: 12,
        fontFamily: "Poppins-Regular",
    },

    price: {
        color: colors.white,
        fontSize: 12,
        fontFamily: "Poppins-Regular",
    },

    empty: {
        margin: 100,
        color: colors.white,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Poppins-Regular",
    },
});
