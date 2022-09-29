import React, { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";
import cartData from "../../backend/data/cart";
import styles from "./styles";

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
            <View style={styles.checkoutWrapper}>
                <View>
                    <Text style={styles.details}>Total: 3BTC 50 DOGE</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
            <BottomBar navigation={navigation} selectedTab="cart" />
        </>
    );
}
