import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";


export const getAllProducts = createAsyncThunk("getallproducts", async () => {
    const response = await api.get('/api/v3/products/products')
    return response.data
})


const allProductsSlice = createSlice({
    name: 'allProducts',

    initialState: {
        products: null,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.products = null
                state.loading = true
                state.error = null
            })

            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload.allProducts
                state.loading = false
                state.error = null
            })

            .addCase(getAllProducts.rejected, (state, action) => {
                state.products = null
                state.loading = false
                state.error = action.payload.error
            })
    }
})


export default allProductsSlice.reducer