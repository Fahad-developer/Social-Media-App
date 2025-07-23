import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";



export const LoginUser = createAsyncThunk('login', async (formData, { rejectWithValue }) => {
    try {
        const response = await api.post('/api/v1/auth/login', formData);
        const token = response.data.token;

        // Save token in local storage
        localStorage.setItem("token", token);

        toast.success('User Logged in Successfully.');
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});


const loginSlice = createSlice({
    name: 'login',

    initialState: {
        user: null,
        loading: false,
        token: localStorage.getItem("token"),
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LoginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token
                state.error = null;
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })

        // Protected data
        // .addCase(fetchProtectedData.fulfilled, (state, action) => {
        //     console.log("Protected data:", action.payload);
        // });
    },
})


export default loginSlice.reducer