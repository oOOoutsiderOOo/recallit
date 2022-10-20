import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, Modal, Pressable } from "react-native";
import { colors } from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import PicSelectModal from "../PicSelectModal";

const TopBar = () => {
    const navigation = useNavigation();
    const imageURI = useSelector(state => state.user.value.picture);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.topBar}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>reKall/it</Text>
                <View style={styles.rightIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate("CartTab", { screen: "Cart" })}>
                        <Ionicons name="cart-outline" size={28} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={styles.userPic} source={{ uri: imageURI ? imageURI : "https://xsgames.co/randomusers/avatar.php?g=male" }} />
                    </TouchableOpacity>
                </View>
            </View>
            <PicSelectModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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

    modalWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000AA",
    },
    modal: {
        margin: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default TopBar;
