import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
dotenv.config()

import cors from 'cors'

import { errorHandler } from './middlewares/ErrorHandler/errorHandler.js'
import { DBConnect } from './config/DB/DB.js'

// Routes
import authRouter from './routes/auth/auth-routes.js'
import companyRouter from './routes/company/company-routes.js'
import productRouter from './routes/products/product-routes.js'


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



DBConnect()

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// In Production Grade Softwares we first deploy backend and then allow origin of that frontend in our cors.

app.use(cors({
    origin: "http://localhost:5173",  // frontend ka port.
    credentials: true  // allow cookies.
}))


app.use('/api/v1/auth', authRouter)
app.use('/api/v2/companies', companyRouter)
app.use('/api/v3/products', productRouter)



// Yeh line uploads folder ko public banayegi:
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/uploads", express.static("uploads"));

app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`App is Running or PORT: ${process.env.PORT}`)
})