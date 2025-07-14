import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";


export const viewCompany = createAsyncThunk('viewCompany', async () => {
    const response = await api.get('/api/v2/companies/viewProfile')
    console.log(response.data)
    return response.data
})


const viewCompanySlice = createSlice({
    name: "viewCompany",
    initialState: {
        company: null,
        loading: false,
        error: null
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(viewCompany.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(viewCompany.fulfilled, (state, action) => {
                state.loading = false
                state.company = action.payload.company
                state.error = action.payload
            })

            .addCase(viewCompany.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})


export default viewCompanySlice.reducer