import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


export const DBConnect = async () => {
    const db = await mongoose.connect(process.env.URI)
    if (db) {
        console.log("Database successfully Connected.")
    } else {
        console.log("Error While Connecting Database.")
    }
}