import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";



export const LoginUser = createAsyncThunk('login', async (formData) => {
    const response = await api.post('/api/v1/auth/login', formData)
    toast.success('User Logged in Successfully.')
    return response.data
})


const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.loading = true
                state.error = false
            })

            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.user
            })

            .addCase(LoginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})


export default loginSlice.reducer