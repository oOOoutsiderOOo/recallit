import { authTypes } from "../types";

const { LOG_IN, SIGN_UP, LOG_OUT } = authTypes;

const initialState = {
    token: null,
    userId: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
        case LOG_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
            };
        case LOG_OUT:
            console.log("test");
            return { ...state, token: null, userId: null };

        default:
            return state;
    }
};

export default authReducer;
