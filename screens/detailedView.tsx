import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, Share } from "react-native";
import { colors } from "../constants/colors";
import featTripsData from "../backend/data/featTrips";
import { icons } from "../constants/icons";

const DetailedView = () => {
    const [trips, setTrips] = useState(featTripsData[0]);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: trips.text,
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

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={trips.image} style={styles.image} resizeMode={"cover"} />
            </View>
            <View>
                <Text style={styles.title}>{trips.text}</Text>
                <View style={styles.durationContainer}>
                    <Text style={styles.duration}>In flesh duration: {trips.realDuration}</Text>
                    <Text style={styles.duration}>Perceived duration: {trips.virtualDuration}</Text>
                </View>
                <View style={styles.bookContainer}>
                    <View style={styles.actionsContainer}>
                        <View style={styles.action}>
                            <Text style={styles.actionText}>Add to favorites</Text>
                            <TouchableOpacity>
                                <Image style={styles.icon} source={icons.favFilled} />
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ad hic voluptates laudantium voluptatem porro architecto,
                        libero sint quod aspernatur culpa rerum, earum amet magni dolores similique assumenda. Reiciendis, eius!
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

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

export default DetailedView;
