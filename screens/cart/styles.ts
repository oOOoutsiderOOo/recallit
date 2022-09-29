import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

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

    checkoutWrapper: {
        alignItems: "center",
        backgroundColor: colors.backgroundDark,
    },

    details: {
        color: colors.gray,
        marginTop: 30,
        marginBottom: 20,
    },

    button: {
        backgroundColor: colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 50,
        marginBottom: 30,
    },

    checkoutText: {
        fontSize: 20,

        color: colors.backgroundDark,
    },
});

export default styles;
