import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/firebase";
import { addUser, getUser, init, updatePicture } from "../../db";
import { User } from "../../types/user";

export const signUp = createAsyncThunk("signUp", async ({ email: email, password: password }) => {
    const res = await axios.post(URL_AUTH_SIGN_UP, {
        email,
        password,
        returnSecureToken: true,
    });

    init();
    await addUser(res.data.localId, email)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    const dbUser = await getUser(res.data.localId);
    const userData = dbUser.rows._array[0];

    return {
        token: res.data.idToken,
        userId: userData.id,
        email: userData.email,
        picture: userData.picture,
    };
});

export const logIn = createAsyncThunk("logIn", async ({ email: email, password: password }) => {
    const res = await axios.post(URL_AUTH_SIGN_IN, {
        email,
        password,
        returnSecureToken: true,
    });
    init();
    await addUser(res.data.localId, email)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    const dbUser = await getUser(res.data.localId);
    const userData = dbUser.rows._array[0];

    return {
        token: res.data.idToken,
        userId: userData.id,
        email: userData.email,
        picture: userData.picture,
    };
});

export const setPicture = createAsyncThunk("setPicture", async ({ id: id, type: type }) => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
        Alert.alert("You need to grant camera permissions to change your profile picture");
    } else {
        var result;
        if (type === "camera") {
            result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });
        } else if (type === "gallery") {
            result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });
        }

        if (!result.cancelled) {
            updatePicture(id, result.uri);
            return { URI: result.uri };
        } else return;
    }
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            token: null,
            userId: null,
            email: null,
            picture: null,
            errorCode: null,
        } as User,
    },
    reducers: {
        logOut: state => {
            state.value.token = null;
            state.value.userId = null;
            state.value.email = null;
            state.value.picture = null;
            state.value.errorCode = null;
        },
    },
    extraReducers: builder => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.value.token = action.payload.token;
            state.value.userId = action.payload.userId;
            state.value.email = action.payload.email;
            state.value.picture = action.payload.picture;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.value.token = action.payload.token;
            state.value.userId = action.payload.userId;
            state.value.email = action.payload.email;
            state.value.picture = action.payload.picture;
        });
        builder.addCase(setPicture.fulfilled, (state, action) => {
            if (action.payload?.URI) {
                state.value.picture = action.payload?.URI;
            } else {
                state.value.picture = state.value.picture;
            }
        });
    },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
