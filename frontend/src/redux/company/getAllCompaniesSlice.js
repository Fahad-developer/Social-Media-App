import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";


export const getAllCompanies = createAsyncThunk('getCompanies', async () => {
    const response = await api.get('/api/v2/companies/allCompanies')
    console.log(response.data)
    return response.data
})


const getAllCompaniesSlice = createSlice({
    name: "AllCompanies",

    initialState: {
        companies: null,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAllCompanies.pending, (state) => {
                state.companies = null
                state.loading = true
                state.error = null
            })

            .addCase(getAllCompanies.fulfilled, (state, action) => {
                state.companies = action.payload.companies
                state.loading = false
                state.error = null
            })

            .addCase(getAllCompanies.rejected, (state, action) => {
                state.companies = null
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default getAllCompaniesSlice.reducer