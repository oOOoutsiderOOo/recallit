import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";
import cartData from "../../backend/data/cart";

export default function Cart({ navigation }) {
    const [cartItems, setCartItems] = useState(cartData);

    const handleDelete = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cart</Text>
            </View>
            <ScrollView style={styles.ScrollViewContainer}>
                {cartItems.map(trip => {
                    return (
                        <View style={styles.card} key={trip.id}>
                            <Image source={trip.image} resizeMode="cover" style={styles.image}></Image>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{trip.text}</Text>
                                <View style={styles.secondRowContainer}>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.price}>Price {trip.price}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => handleDelete(trip.id)}>
                                <Ionicons name="trash" size={32} color={colors.white} />
                            </TouchableOpacity>
                        </View>
                    );
                })}
                {!cartItems[0] && <Text style={styles.empty}>Your cart is empty!</Text>}
            </ScrollView>
            <BottomBar navigation={navigation} selectedTab="cart" />
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
        height: 75,

        paddingRight: 20,
        flexDirection: "row",
        backgroundColor: colors.primary,
        overflow: "hidden",
        alignItems: "center",
        borderColor: colors.backgroundDark,
        borderTopWidth: 1,
    },
    image: {
        height: 75,
        width: 75,
    },
    textContainer: {
        width: "70%",
        height: 75,
        marginLeft: 10,
        padding: 5,
        paddingTop: 10,
        justifyContent: "space-between",
    },
    secondRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },

    priceContainer: {},

    title: {
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
    },

    price: {
        color: colors.gray,
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
