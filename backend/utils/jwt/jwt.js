import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const createToken = async (id) => {
    const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: "1d" })
    return token
}


export const verifyToken = async (token) => {
    const decoded = jwt.verify( token , process.env.SECRET)
    return decoded
}