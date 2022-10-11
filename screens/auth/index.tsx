import React, { useEffect, useReducer, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../store/actions/auth.action";
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

        case "TOUCH_FIELD":
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name],
                    touched: !touched,
                },
            };

        default:
            return state;
    }
};

export default function Auth({ navigation }) {
    const [isLogin, setIslogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const dispatch = useDispatch();

    const onHandleSubmit = () => {
        isLogin
            ? dispatch(logIn(formState.email.value, formState.password.value))
            : dispatch(signUp(formState.email.value, formState.password.value));
    };

    const onHandleChange = (value: string, type: string) => {
        onInputChange(type, value, dispatchFormState, formState);
        dispatchFormState({ type: "TOUCH_FIELD", payload: { name: value } });
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
                        onFocus={() => dispatchFormState({ type: "TOUCH_FIELD", payload: { name: "email" } })}
                        value={formState.email.value}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                    <Text style={styles.errorText}>{formState.email.touched && formState.email.error}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onHandleChange(value, "password")}
                        onFocus={() => dispatchFormState({ type: "TOUCH_FIELD", payload: { name: "password" } })}
                        value={formState.password.value as string}
                        placeholder="Enter your password"
                        blurOnSubmit={true}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <Text style={styles.errorText}>{formState.password.touched && formState.password.error}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => onHandleSubmit()} disabled={!formState.isFormValid}>
                        <Text style={styles.buttonText}>{isLogin ? "Login" : "Sign up"}</Text>
                    </TouchableOpacity>
                    {isLogin && (
                        <TouchableOpacity style={styles.forgotButton}>
                            <Text style={styles.forgotText}>Forgot password?</Text>
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
            </View>
        </>
    );
}
