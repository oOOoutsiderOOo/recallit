import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";
import { Trip, Trips } from "../../types/trips";
import { useDispatch, useSelector } from "react-redux";
import { selectTrip } from "../../store/actions/trip.action";

export default function Search({ navigation }) {
    const dispatch = useDispatch();
    const trips: Trips = useSelector(state => state.trips.trips);

    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [emptyResult, setEmptyResult] = useState(false);

    const handleSelectItem = (selectedTrip: Trip) => {
        dispatch(selectTrip(selectedTrip.id));
        navigation.push("DetailedView");
    };

    const handleSearch = (text: string) => {
        setEmptyResult(false);
        text === "" && setSearchResult([]);
        if (text !== "") {
            let array = trips.filter((trip: Trip) => trip.text.includes(text));
            setSearchResult(array);
            !array[0] && setEmptyResult(true);
        }
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Search</Text>
            </View>
            <ScrollView style={styles.ScrollViewContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Find your next adventure!"
                    onChangeText={newText => setSearchText(newText)}
                    defaultValue={searchText}
                    onSubmitEditing={() => handleSearch(searchText)}
                />
                {searchResult &&
                    searchResult.map((trip: Trip) => {
                        return (
                            <TouchableOpacity style={styles.card} key={trip.id} onPress={() => handleSelectItem(trip)}>
                                <Image source={trip.image} resizeMode="cover" style={styles.image}></Image>
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
                {emptyResult && <Text style={styles.empty}>Nothing Found :(</Text>}
            </ScrollView>
            <BottomBar navigation={navigation} selectedTab="search" />
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
    searchInput: {
        backgroundColor: "white",
        height: 60,
        margin: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 3,
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
