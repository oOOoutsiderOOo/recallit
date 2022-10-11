import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        height: 200,
        width: 200,
    },

    formTitle: {
        color: colors.white,
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        textAlign: "center",
        padding: 20,
    },

    formWrapper: {
        flex: 1,
        backgroundColor: colors.primary,
    },

    form: {
        backgroundColor: colors.backgroundDark,
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },

    input: {
        fontFamily: "Poppins-Regular",
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingTop: 4,
        marginTop: 20,
    },

    button: {
        backgroundColor: colors.accent,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: "center",
    },

    buttonText: {
        fontFamily: "Poppins-Regular",
        color: colors.backgroundDark,
    },

    forgotText: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: colors.accent,
        textAlign: "center",
        marginBottom: 10,
    },

    signLogWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },

    signLogText: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: colors.gray,
        textAlign: "center",
    },

    signLogButtonText: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: colors.accent,
        textAlign: "center",
        marginLeft: 10,
    },
});

export default styles;
