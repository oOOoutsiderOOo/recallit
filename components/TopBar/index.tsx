import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { colors } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setImageURI } from "../../store/slices/userSettings.slice";

const TopBar = () => {
    const navigation = useNavigation();
    const imageURI = useSelector(state => state.settings.value.URI);
    const dispatch = useDispatch();

    return (
        <View style={styles.topBar}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>reKall/it</Text>
                <View style={styles.rightIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate("CartTab", { screen: "Cart" })}>
                        <Ionicons name="cart-outline" size={28} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => dispatch(setImageURI())}>
                        <Image style={styles.userPic} source={{ uri: imageURI }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        paddingTop: 35,
        padding: 20,
        backgroundColor: colors.primary,
    },
    logo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
    },
    rightIcons: {
        flexDirection: "row",
    },
    userPic: {
        width: 30,
        height: 30,
        marginLeft: 20,
        borderRadius: 1000,
    },
});

export default TopBar;
