import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";


export const createCompany = createAsyncThunk('createCompany', async (FormData) => {
    const response = await api.post('/api/v2/companies/createCompany', FormData)
    toast.success("Company Registered Successfully.")
    console.log(response.data)
    return response.data
})


const createCompanySlice = createSlice({
    name: "createCompany",

    initialState: {
        company: null,
        loading: true,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(createCompany.pending, (state) => {
                state.loading = true
                state.company = null
            })

            .addCase(createCompany.fulfilled, (state, action) => {
                state.company = action.payload
                state.loading = false
                state.error = null
            })

            .addCase(createCompany.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})


export default createCompanySlice.reducer