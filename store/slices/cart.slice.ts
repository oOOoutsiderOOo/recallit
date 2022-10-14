import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../constants/firebase";

export const getCartContents = createAsyncThunk("getCartContents", async () => {
    const res = await axios.get(`${URL_API}Trips.json`);
    console.log(Object.values(res.data));

    return {
        cartContents: Object.values(res.data),
    };
});

export const removeItem = createAsyncThunk("removeItem", async ({ id }) => {
    await axios.delete(`${URL_API}Trips/${id}.json`);
    return id;
});

export const addItem = createAsyncThunk("addItem", async ({ trip }) => {
    await axios.patch(`${URL_API}Trips.json`, { [trip.id]: trip });
    return trip;
});

export const cartSlice = createSlice({
    name: "cart",
    initialState: { value: [] },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCartContents.fulfilled, (state, action) => {
            state.value = action.payload.cartContents;
        });

        builder.addCase(removeItem.fulfilled, (state, action) => {
            state.value = state.value.filter(trip => trip.id !== action.payload);
        });
        builder.addCase(addItem.fulfilled, (state, action) => {
            if (!state.value.find(trip => trip.id === action.payload.id)) {
                state.value.push(action.payload);
            }
        });
    },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
