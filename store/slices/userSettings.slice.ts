import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Alert } from "react-native";

export const setImageURI = createAsyncThunk("setImageURI", async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
        Alert.alert("You need to grant camera permissions to change your profile picture");
    } else {
        const result = await ImagePicker.launchCameraAsync({
            //mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        if (!result.cancelled) {
            /*             const filename = result.uri.split("/").pop() as string;
            const path = FileSystem.documentDirectory + filename;

            try {
                await FileSystem.copyAsync({
                    from: result.uri,
                    to: path,
                });
            } catch (err) {
                console.log(err);
                throw err;
            }

            return { URI: path }; */

            // Desactivado por bug en Expo

            return { URI: result.uri };
        }
    }
});

export const settingsSlice = createSlice({
    name: "userSettings",
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
