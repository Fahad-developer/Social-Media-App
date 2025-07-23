// redux/company/checkFollowingSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";

export const checkFollowing = createAsyncThunk(
    "company/checkFollowing",
    async (ownerId) => {
        const response = await api.get(`/api/v2/companies/checkFollowing/${ownerId}`);
        return response.data.isFollowing; // assuming API returns { isFollowing: true/false }
    }
);

const checkFollowingSlice = createSlice({
    name: "checkFollowing",
    initialState: {
        isFollowing: false,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkFollowing.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkFollowing.fulfilled, (state, action) => {
                state.loading = false;
                state.isFollowing = action.payload;
            })
            .addCase(checkFollowing.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default checkFollowingSlice.reducer;
