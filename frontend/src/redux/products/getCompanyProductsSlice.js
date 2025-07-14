import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";


export const getCompanyProducts = createAsyncThunk('Products', async () => {
    const response = await api.get('/api/v3/products/getCompanyProducts')
    return response.data
})


const getCompanyProductsSlice = createSlice({
    name: "getCompanyProducts",
    initialState: {
        products: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getCompanyProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(getCompanyProducts.fulfilled, (state, action) => {
                state.products = action.payload.companyAllProducts || [];
                state.loading = false;
                state.error = null;
            })


            .addCase(getCompanyProducts.rejected, (state, action) => {
                state.products = null
                state.loading = false
                state.error = action.payload
            })
    }
})


export default getCompanyProductsSlice.reducer