import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";


export const profileStatistics = createAsyncThunk('profileStatistics', async () => {
    const response = await api.get('/api/v2/companies/getStatistics')
    console.log(response.data)  // followersCount, followingCount, productsCount
    return response.data
})


const profileStatisticsSlice = createSlice({
    name: "profileStatistics",

    initialState: {
        statistics: null,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(profileStatistics.pending, (state) => {
                state.loading = true
                state.error = null
                state.statistics = null
            })

            .addCase(profileStatistics.fulfilled, (state, action) => {
                state.loading = false
                state.statistics = action.payload
                state.error = null
            })

            .addCase(profileStatistics.rejected, (state, action) => {
                state.loading = false
                state.statistics = null
                state.error = action.payload
            })
    }
})


export default profileStatisticsSlice.reducer