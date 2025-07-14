import mongoose from "mongoose";


const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        profile: {
            type: String,
            required: true,
            trim: true
        },

        contact: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true
        },

        city: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            unique: true,
            required: true
        },

        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            default: null
        }],
    },


    {
        timestamps: true
    }
)

companySchema.index({ name: 1 })
companySchema.index({ city: 1 })
companySchema.index({ owner: 1 })
companySchema.index({ products: 1 })


const Company = mongoose.model("Company", companySchema)

export default Company