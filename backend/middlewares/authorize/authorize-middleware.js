export const authorizeUser = (...roles) => {
    return (req, res, next) => {
        let user = req.user.role

        if (!roles.includes(user)) {
            return res.status(400).json({ message: "User is not Authenticated to Access this Resource.", success: false })
        }

        next()
    }
}