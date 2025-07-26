// features/company/companyThunk.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/axiosConfig';

export const searchCompanies = createAsyncThunk("searchCompanies", async (search) => {
    const res = await api.get(`/api/v2/companies/search?search=${search}`)
    console.log("result from search", search)
    return res.data
})



const searchCompanySlice = createSlice({
    name: "searchCompanies",

    initialState: {
        companies: null,
        error: null,
        loading: false
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(searchCompanies.pending, (state) => {
                state.companies = null
                state.error = null
                state.loading = true
            })

            .addCase(searchCompanies.fulfilled, (state, action) => {
                state.companies = action.payload.companies
                state.error = null
                state.loading = false
            })

            .addCase(searchCompanies.rejected, (state, action) => {
                state.companies = null
                state.loading = false
                state.error = action.payload
            })
    }
})


export default searchCompanySlice.reducer