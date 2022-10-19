import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";
import { logOut } from "../../store/slices/auth.slice";
import { setImageURI } from "../../store/slices/userSettings.slice";

import { addUser, deleteTable, fetchUsers, init } from "../../db";

export default function Account({ navigation }) {
    const dispatch = useDispatch();

    const handleInit = () => {
        init()
            .then(() => console.log("database inicializada"))
            .catch(err => {
                console.log(err.message);
            });
    };

    const handleFecth = () => {
        fetchUsers()
            .then(result => console.log(result.rows))
            .catch(err => {
                console.log(err.message);
            });
    };

    const handleAddUser = () => {
        addUser()
            .then(result => console.log(result))
            .catch(err => {
                console.log(err.message);
            });
    };

    const handleDeleteTable = () => {
        deleteTable()
            .then(result => console.log(result))
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Account</Text>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <TouchableOpacity style={styles.menuElement} onPress={() => dispatch(setImageURI())}>
                    <Text style={styles.menuElementText}>Change profile picture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement} onPress={handleInit}>
                    <Text style={styles.menuElementText}>Init DB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement} onPress={handleDeleteTable}>
                    <Text style={styles.menuElementText}>Delete table</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement} onPress={handleFecth}>
                    <Text style={styles.menuElementText}>Get db data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement} onPress={handleAddUser}>
                    <Text style={styles.menuElementText}>Add test user</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>About</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>{`userId ${userId}`}</Text>
                </TouchableOpacity> */}
            </ScrollView>
            <View style={styles.logoutViewContainer}>
                <TouchableOpacity style={styles.logoutContainer} onPress={() => dispatch(logOut())}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <BottomBar navigation={navigation} selectedTab="account" />
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

    scrollViewContainer: {
        flex: 0.9,
        backgroundColor: colors.backgroundDark,
        paddingTop: 5,
    },

    logoutViewContainer: {
        flex: 0.1,
        backgroundColor: colors.backgroundDark,
        marginTop: "auto",
        justifyContent: "flex-end",

        padding: 20,
    },

    menuElement: {
        flex: 1,
        height: 50,
        borderBottomWidth: 0,
        borderBottomColor: colors.primary,
        justifyContent: "center",
        paddingLeft: 10,
    },

    menuElementText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
    },

    logoutText: {
        color: colors.accent,
        textAlign: "center",
    },
});
