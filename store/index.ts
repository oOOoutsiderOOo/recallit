import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import cartReducer from "./slices/cart.slice";
import tripsReducer from "./slices/trips.slice";
import settingsReducer from "./slices/userSettings.slice";

const store = configureStore({
    reducer: {
        trips: tripsReducer,
        cart: cartReducer,
        auth: authReducer,
        settings: settingsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
