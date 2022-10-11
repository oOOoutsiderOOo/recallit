import axios from "axios";
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from "../../constants/firebase";
import { authTypes } from "../types";

const { LOG_IN, SIGN_UP, LOG_OUT } = authTypes;

export const signUp = (email: string, password: string) => {
    return async dispatch => {
        try {
            console.log(email, password);
            const res = await axios.post(URL_AUTH_SIGN_UP, {
                email,
                password,
                returnSecureToken: true,
            });

            console.log(res);

            dispatch({
                type: SIGN_UP,
                token: res.data.idToken,
                userId: res.data.localId,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const logIn = (email: string, password: string) => {
    return async dispatch => {
        try {
            const res = await axios.post(URL_AUTH_SIGN_IN, {
                email,
                password,
                returnSecureToken: true,
            });
            console.log(res);

            dispatch({
                type: LOG_IN,
                token: res.data.idToken,
                userId: res.data.localId,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const logOut = () => ({ type: LOG_OUT });