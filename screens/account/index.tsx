import React from "react";
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { BottomBar } from "../../components/index";
import { colors } from "../../constants/colors";

export default function Account({ navigation }) {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Account</Text>
            </View>
            <ScrollView style={styles.scrollViewContainer}>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuElement}>
                    <Text style={styles.menuElementText}>Settings</Text>
                </TouchableOpacity>
            </ScrollView>
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
        flex: 1,
        backgroundColor: colors.backgroundDark,
    },

    menuElement: {
        flex: 1,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        justifyContent: "center",
        paddingLeft: 10,
    },

    menuElementText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
    },
});
