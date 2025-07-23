import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";


export const likeProduct = createAsyncThunk('likeproduct', async (productId) => {
    const response = await api.post(`/api/v3/products/likeProduct/${productId}`)
    toast.success("You just Liked a Product.")
    console.log(response)
    return response.data
})

const likeProductSlice = createSlice({
    name: 'likeProduct',

    initialState: {
        isLoading: false,
        isLiked: null,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(likeProduct.pending, (state) => {
                state.isLoading = true
                state.isLiked = null
                state.error = null
            })

            .addCase(likeProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLiked = action.payload
                state.error = null
            })

            .addCase(likeProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isLiked = null
                state.error = action.payload
            })
    }
})


export default likeProductSlice.reducer