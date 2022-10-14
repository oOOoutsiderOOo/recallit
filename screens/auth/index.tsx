import React, { useEffect, useReducer, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetError } from "../../store/actions/auth.action";
import { logIn, signUp } from "../../store/slices/auth.slice";
import { getCartContents } from "../../store/slices/cart.slice";
import { onInputChange } from "../../utils/authForm";
import styles from "./styles";

const initialState = {
    email: { value: "", error: "", touched: false, hasError: true },
    password: { value: "", error: "", touched: false, hasError: true },
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATED_FORM":
            const { name, value, hasError, error, touched, isFormValid } = action.payload;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid,
            };

        default:
            return state;
    }
};

export default function Auth({ navigation }) {
    const [isLogin, setIslogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const dispatch = useDispatch();
    const requestError = useSelector(state => state.auth.errorCode);

    const onHandleSubmit = () => {
        isLogin
            ? dispatch(logIn({ email: formState.email.value, password: formState.password.value }))
            : dispatch(signUp({ email: formState.email.value, password: formState.password.value }));
    };

    const onHandleChange = (value: string, type: string) => {
        dispatch(resetError());
        onInputChange(type, value, dispatchFormState, formState);
    };

    return (
        <>
            <View style={styles.header}>
                <Image style={styles.image} source={require("../../assets/images/clipart/vrFace.png")} />
            </View>
            <View style={styles.formWrapper}>
                <KeyboardAvoidingView style={styles.form} behavior="position">
                    <Text style={styles.formTitle}>{isLogin ? "Login" : "Sign up"}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onHandleChange(value, "email")}
                        //onFocus={() => onHandleFocus("email")}
                        value={formState.email.value}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        blurOnSubmit={true}
                    />
                    <Text style={styles.errorText}>{formState.email.error}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onHandleChange(value, "password")}
                        //onFocus={() => onHandleFocus("password")}
                        value={formState.password.value as string}
                        placeholder="Enter your password"
                        blurOnSubmit={true}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <Text style={styles.errorText}>{requestError ? requestError : formState.password.error}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => onHandleSubmit()} disabled={!formState.isFormValid}>
                        <Text style={styles.buttonText}>{isLogin ? "Login" : "Sign up"}</Text>
                    </TouchableOpacity>
                    {isLogin && (
                        <TouchableOpacity style={styles.forgotButton}>
                            <Text style={styles.forgotText} onPress={() => dispatch(getCartContents())}>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                    )}
                    <View style={styles.signLogWrapper}>
                        <Text style={styles.signLogText}>{isLogin ? "Don't have an account?" : "Already have an account?"}</Text>
                        <TouchableOpacity style={styles.signLogButton}>
                            <Text style={styles.signLogButtonText} onPress={() => setIslogin(!isLogin)}>
                                {isLogin ? "Sign up" : "Log in"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <Text style={styles.forgotText}>{`${formState.isFormValid ? "yes" : "no"} ${requestError} emailhaserror ${
                    formState.email.hasError
                } passhaserror ${formState.password.hasError}`}</Text>
            </View>
        </>
    );
}
