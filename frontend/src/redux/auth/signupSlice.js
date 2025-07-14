import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";


export const SingupUser = createAsyncThunk('signup', async ({ name, email, password }) => {
    const response = await api.post('/api/v1/auth/createAccount', {
        name,
        email,
        password
    })
    toast.success("Account Created Successfully, Please Login.", {
        position: "top-right"
    })
    return response.data
})


const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SingupUser.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(SingupUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })

            .addCase(SingupUser.rejected, (state, action) => {
                state.error = action.payload,
                state.loading = false
            })
    }
})


export default signupSlice.reducer