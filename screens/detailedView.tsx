import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Share } from "react-native";
import { colors } from "../constants/colors";
import { icons } from "../constants/iconsScreen";
import { BottomBar } from "../components";
import { Trip } from "../types/trips";
import { TripsContext } from "../contexts/TripsContext";

export default function DetailedView({ navigation }) {
    const { selectedTrip, setTrips, trips } = useContext(TripsContext);
    const [trip, setTrip] = useState(selectedTrip);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: trip.text,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleFav = () => {
        const tempTrips = trips.map((item: Trip) => {
            if (item.id === trip.id) {
                return { ...item, fav: !item.fav };
            }
            return item;
        });
        setTrips([...tempTrips]);
        setTrip({ ...trip, fav: !trip.fav });
    };

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={trip.image} style={styles.image} resizeMode={"cover"} />
                </View>
                <View>
                    <Text style={styles.title}>{trip.text}</Text>
                    <View style={styles.durationContainer}>
                        <Text style={styles.duration}>In flesh duration: {trip.realDuration}</Text>
                        <Text style={styles.duration}>Perceived duration: {trip.virtualDuration}</Text>
                    </View>
                    <View style={styles.bookContainer}>
                        <View style={styles.actionsContainer}>
                            <View style={styles.action}>
                                <Text style={styles.actionText}>{trip.fav ? "Remove from favorites" : "Add to favorites"}</Text>
                                <TouchableOpacity onPress={handleFav}>
                                    <Image style={styles.icon} source={trip.fav ? icons.favFilled : icons.favWhite} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.action}>
                                <Text style={styles.actionText}>Share</Text>
                                <TouchableOpacity onPress={onShare}>
                                    <Image style={styles.icon} source={icons.share} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ad hic voluptates laudantium voluptatem porro
                            architecto, libero sint quod aspernatur culpa rerum, earum amet magni dolores similique assumenda. Reiciendis, eius!
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <BottomBar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundDark,
    },
    imageContainer: {
        height: 200,
        backgroundColor: "red",
        overflow: "hidden",
    },

    image: {
        flex: 1 /* fix for resizeMode */,
        height: undefined,
        width: undefined,
    },

    title: {
        padding: 20,
        color: colors.white,
        fontSize: 25,
        fontFamily: "Poppins-Bold",
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },

    durationContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },

    duration: {
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
    },

    bookContainer: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    actionsContainer: {
        width: "100%",
        flexDirection: "row",
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    action: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },

    actionText: {
        paddingHorizontal: 5,
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 10,
    },

    icon: {
        height: 20,
        width: 20,
    },
    bookButton: {
        backgroundColor: colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
    },

    descriptionContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },

    description: {
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
    },
});
