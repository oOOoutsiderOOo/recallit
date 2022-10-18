import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../constants/firebase";

export const getUser = createAsyncThunk("getUser", async uid => {
    const res = await axios.get(`${URL_API}Users/${uid}.json`);
    console.log(Object.values(res.data));

    return {
        value: Object.values(res.data),
    };
});

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            UID: "",
            email: "",
            pictureURI: "",
        },
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            console.log(action.payload);
        });
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
