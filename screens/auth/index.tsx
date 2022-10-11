import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

export default function Auth({ navigation }) {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return (
        <>
            <View style={styles.header}>
                <Image style={styles.image} source={require("../../assets/images/clipart/vrFace.png")} />
            </View>
            <View style={styles.formWrapper} behavior="position">
                <View style={styles.form}>
                    <Text style={styles.formTitle}>Login</Text>
                    <TextInput style={styles.input} onChangeText={value => setEmail(value)} value={email as string} placeholder="Enter your email" />
                    <TextInput
                        style={styles.input}
                        onChangeText={value => setPassword(value)}
                        value={password as string}
                        placeholder="Enter your password"
                        blurOnSubmit={true}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={styles.signLogWrapper}>
                        <Text style={styles.signLogText}>Don't have an account?</Text>
                        <TouchableOpacity style={styles.signLogButton}>
                            <Text style={styles.signLogButtonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}
