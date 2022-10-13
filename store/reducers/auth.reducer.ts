import { authTypes } from "../types";

const { LOG_IN, SIGN_UP, LOG_OUT, SET_ERROR } = authTypes;

const initialState = {
    token: null,
    userId: null,
    errorCode: null,
};

const authReducer = (state = initialState, action: { type: string; token: string; userId: string; errorCode?: string }) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                errorCode: null,
            };
        case LOG_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                errorCode: action.errorCode,
            };
        case LOG_OUT:
            return { ...state, token: null, userId: null };

        case SET_ERROR:
            return { ...state, token: null, userId: null, errorCode: null };

        default:
            return state;
    }
};

export default authReducer;
