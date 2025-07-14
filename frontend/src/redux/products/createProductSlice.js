import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axiosConfig";
import { toast } from "react-toastify";

export const createProduct = createAsyncThunk("createProduct", async (formData) => {
    const response = await api.post("/api/v3/products/createProduct", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return response.data;
});


const createProductSlice = createSlice({
    name: "createProduct",

    initialState: {
        product: false,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = true
                state.error = null
            })

            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false
                state.product = false
                state.error = action.payload
            })
    }
})


export default createProductSlice.reducer