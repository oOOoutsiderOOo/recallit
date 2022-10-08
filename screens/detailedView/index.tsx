import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, Share } from "react-native";
import styles from "./styles";
import { icons } from "../../constants/iconsScreen";
import { BottomBar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setFav } from "../../store/actions/trip.action";
import { addItem } from "../../store/actions/cart.action";

export default function DetailedView({ navigation }) {
    const trip = useSelector(state => state.trips.selectedTrip);
    const dispatch = useDispatch();

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

    const handleFav = (id: number) => {
        dispatch(setFav(id));
    };

    const handleBookNow = (id: number) => {
        dispatch(addItem(id));
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
                                <TouchableOpacity onPress={() => handleFav(trip.id)}>
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
                        <TouchableOpacity style={styles.bookButton} onPress={() => handleBookNow(trip)}>
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
            <BottomBar navigation={navigation} selectedTab={""} />
        </>
    );
}
