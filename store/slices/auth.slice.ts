import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/firebase";
import { addUser, init } from "../../db";

export const signUp = createAsyncThunk("signUp", async ({ email: email, password: password }) => {
    const res = await axios.post(URL_AUTH_SIGN_UP, {
        email,
        password,
        returnSecureToken: true,
    });

    return {
        token: res.data.idtoken,
        userId: res.data.localId,
    };
});

export const logIn = createAsyncThunk("logIn", async ({ email: email, password: password }) => {
    const res = await axios.post(URL_AUTH_SIGN_IN, {
        email,
        password,
        returnSecureToken: true,
    });
    init();
    addUser(res.data.localId, email)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    return {
        token: res.data.idToken,
        userId: res.data.localId,
    };
});

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            token: null,
            userId: null,
            errorCode: null,
        },
    },
    reducers: {
        logOut: state => {
            state.value.token = null;
            state.value.userId = null;
            state.value.errorCode = null;
        },
    },
    extraReducers: builder => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.value.token = action.payload.token;
            state.value.userId = action.payload.userId;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            state.value.token = action.payload.token;
            state.value.userId = action.payload.userId;
        });
    },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
