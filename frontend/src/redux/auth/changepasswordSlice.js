import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";

export const changePassword = createAsyncThunk('changepass', async (formData) => {
    const response = await api.post('/api/v1/auth/changePassword', formData)
    toast.success("Password Changed Successfully.")
    return response.data
})

const changePasswordSlice = createSlice({
    name: "change password",
    initialState: {
        loading: false,
        success: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(changePassword.pending, (state) => {
                state.loading = true
                state.success = false
                state.error = null

            })

            .addCase(changePassword.fulfilled, (state) => {
                state.loading = false
                state.success = true
                state.error = null
            })

            .addCase(changePassword.rejected, (state, action) => {
                state.loading = false
                state.success = false
                state.error = action.payload
            })
    }
})


export default changePasswordSlice.reducer