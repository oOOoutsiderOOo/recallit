import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";

const Banner = () => {
    const [showBanner, setShowBanner] = useState(true);
    return (
        <>
            {showBanner && (
                <View style={styles.banner}>
                    <Text style={styles.text}>Book now and get 30% off you next VirtualMeal™!</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setShowBanner(false)}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    banner: {
        backgroundColor: colors.accent,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        fontSize: 12,
        fontFamily: "Poppins-Bold",
        color: colors.backgroundDark,
    },

    closeButton: {
        marginLeft: "auto",
        fontFamily: "Poppins-Bold",
    },
});

export default Banner;
