import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    company: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        default: []
    }],

    likedProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        default: []
    }],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }], 

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],

}, {
    timestamps: true
})


const User = mongoose.model("User", userSchema)

export default User