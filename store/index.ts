import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import cartReducer from "./slices/cart.slice";
import tripsReducer from "./slices/trips.slice";

const store = configureStore({
    reducer: {
        trips: tripsReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});

export default store;
