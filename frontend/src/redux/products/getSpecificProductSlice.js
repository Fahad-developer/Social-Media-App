import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";


export const getSpecificProductDetail = createAsyncThunk("ProductDetal", async (productId) => {
    const response = await api.get(`/api/v3/products/product/${productId}`)
    console.log(response.data)
    return response.data
})


const ProductDetailSlice = createSlice({
    name: "productDetail",

    initialState: {
        loading: false,
        productDetail: null,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getSpecificProductDetail.pending, (state) => {
                state.loading = true
                state.productDetail = null
                state.error = null
            })

            .addCase(getSpecificProductDetail.fulfilled, (state, action) => {
                state.loading = false
                state.productDetail = action.payload
                state.error = null
            })

            .addCase(getSpecificProductDetail.rejected, (state, action) => {
                state.loading = false
                state.productDetail = null
                state.error = action.payload
            })
    }
})


export default ProductDetailSlice.reducer