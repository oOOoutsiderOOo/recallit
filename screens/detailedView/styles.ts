import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundDark,
    },
    imageContainer: {
        height: 200,
        backgroundColor: "red",
        overflow: "hidden",
    },

    image: {
        flex: 1 /* fix for resizeMode */,
        height: undefined,
        width: undefined,
    },

    title: {
        padding: 20,
        color: colors.white,
        fontSize: 25,
        fontFamily: "Poppins-Bold",
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },

    durationContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },

    duration: {
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
    },

    bookContainer: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },
    actionsContainer: {
        width: "100%",
        flexDirection: "row",
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    action: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },

    actionText: {
        paddingHorizontal: 5,
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 10,
    },

    icon: {
        height: 20,
        width: 20,
    },
    bookButton: {
        backgroundColor: colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
    },

    descriptionContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    },

    description: {
        color: colors.white,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
    },
});

export default styles;
