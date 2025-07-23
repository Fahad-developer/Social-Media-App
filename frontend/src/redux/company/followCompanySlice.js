import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";


export const Follow = createAsyncThunk('follow', async (targetId, thunkAPI) => {
    try {
        const res = await api.post(`/api/v2/companies/following/${targetId}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        // Show error toast
        toast.error(error.response?.data?.message || "Failed to follow.");
        return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
});



const followSlice = createSlice({
    name: 'follow',

    initialState: {
        loading: false,
        success: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(Follow.pending, (state) => {
                state.loading = true
                state.success = false
                state.error = null
            })

            .addCase(Follow.fulfilled, (state, action) => {
                state.loading = false
                state.success = action.payload.success
                state.error = null
            })

            .addCase(Follow.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
                state.error = action.payload
            })
    }

})


export default followSlice.reducer