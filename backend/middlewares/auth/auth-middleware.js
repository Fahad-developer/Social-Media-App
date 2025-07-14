import User from '../../models/user/user-model.js'
import { verifyToken } from '../../utils/jwt/jwt.js'


export const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token

        // console.log(token)

        if (!token) {
            return res.status(401).json({ success: false, message: "No token. Please login." })
        }

        const decoded = await verifyToken(token)

        console.log(decoded.id)
        // Check if decoded has correct field
        const user = await User.findById(decoded.id).select("-password")
        // console.log(user)

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" })
        }

        req.user = user

        next()
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid token or auth failed." })
    }
}