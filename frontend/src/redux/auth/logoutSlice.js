import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../axios/axiosConfig'
import { toast } from 'react-toastify'


export const LogoutUser = createAsyncThunk('logout', async () => {
    const response = await api.post('/api/v1/auth/logout')
    return response.data
})


const logoutSlice = createSlice({
    name: "logout",

    initialState: {
        isLoggedOut: false,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LogoutUser.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(LogoutUser.fulfilled, (state) => {
                state.loading = false
                state.isLoggedOut = true
                localStorage.removeItem("token")
                toast.success("Logged Out Successfully.")
            })

            .addCase(LogoutUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }
})


export default logoutSlice.reducer