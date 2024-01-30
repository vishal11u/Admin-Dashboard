import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: {
        profile: null,
        isLoggedIn: false,
    },
    reducers: {
        setUserProfile: (state, action) => {
            state.profile = action.payload;
            state.isLoggedIn = true;
        },
        clearUserProfile: (state) => {
            state.profile = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;
export const selectUserProfile = (state) => state.userProfile.profile;
export const selectIsLoggedIn = (state) => state.userProfile.isLoggedIn; 
