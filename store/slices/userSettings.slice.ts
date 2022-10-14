import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ImagePicker from "expo-image-picker";

export const setImageURI = createAsyncThunk("setImageURI", async () => {
    console.log("test");

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
        return { URI: result.uri };
    }
});

export const settingsSlice = createSlice({
    name: "trips",
    initialState: {
        value: { URI: "https://xsgames.co/randomusers/avatar.php?g=female" },
    },
    reducers: {
        setImageURIs: (state, action) => {
            state.value = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(setImageURI.fulfilled, (state, action) => {
            state.value.URI = action.payload?.URI;
        });
    },
});

export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
