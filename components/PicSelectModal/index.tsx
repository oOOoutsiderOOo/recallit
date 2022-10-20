import React from "react";
import { Modal, Alert, View, Pressable, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { setPicture } from "../../store/slices/user.slice";

const PicSelectModal = ({ modalVisible, setModalVisible }) => {
    const userID = useSelector(state => state.user.value.userId);
    const imageURI = useSelector(state => state.user.value.picture);

    const dispatch = useDispatch();

    return (
        <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalWrapper}>
                <View style={styles.modal}>
                    <Image style={styles.modalPic} source={{ uri: imageURI ? imageURI : "https://xsgames.co/randomusers/avatar.php?g=male" }} />
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => dispatch(setPicture({ id: userID, type: "gallery" }))}>
                        <Text style={styles.textStyle}>Select from gallery</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => dispatch(setPicture({ id: userID, type: "camera" }))}>
                        <Text style={styles.textStyle}>Take a picture!</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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
        padding: 10,
        alignItems: "center",
        width: "80%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalPic: {
        width: 100,
        height: 100,
        borderRadius: 1000,
        marginTop: -50,
    },
    button: {
        backgroundColor: colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 2000,
        width: "80%",
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: colors.accent,
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

export default PicSelectModal;
