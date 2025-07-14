import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },

        productImage: {
            type: String,
            required: true,
            trim: true
        },

        productDescription: {
            type: String,
            required: true,
            trim: true
        },

        productPrice: {
            type: Number,
            required: true,
            trim: true
        },

        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
            required: true
        }
    },

    {
        timestamps: true
    }
)

productSchema.index({ productName:1 })
productSchema.index({ company:1 })


const Product = mongoose.model("Product", productSchema)

export default Product