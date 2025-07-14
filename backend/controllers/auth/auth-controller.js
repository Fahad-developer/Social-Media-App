import asyncHandler from "../../utils/asyncErrorHandler/asyncHandler.js";
import User from "../../models/user/user-model.js";
import { comparePassword, hashpass } from '../../utils/encrypt/password.js'
import { createToken } from "../../utils/jwt/jwt.js";
import { passwordChange, sendWelcomeEmail } from "../../utils/email/nodeMailer.js";

export const signUp = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    console.log([name, email, password])

    if (!name || !email || !password) throw new Error("All Fields are Required.")

    const user = await User.findOne({ email })

    if (user) throw new Error("User Already Exsist.")

    const hashedPassword = await hashpass(password)

    const newUser = await new User({
        name,
        email,
        password: hashedPassword
    })

    await newUser.save()

    sendWelcomeEmail(name, email)

    return res.status(200).json({ success: true, newUser })
})


export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) throw new Error("Both Email and Password fields are required")

    const user = await User.findOne({ email })

    if (!user) throw new Error("User not Exsist Kindly Signup First.")

    const isMatch = await comparePassword(password, user.password)

    if (!isMatch) throw new Error("Wrong Email or Password.")

    const token = await createToken(user._id)

    if (!token) throw new Error("Error While Generating Secure Token")

    const Options = {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    }

    res.cookie("token", token, Options)

    return res.status(200).json({ success: true, user })
})


export const logout = asyncHandler(async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict"
    })

    return res.status(200).json({ success: true })
})


export const changePassword = asyncHandler(async(req, res) => {

    const id = req.user._id

    console.log(id)
    
    const { password, confirmPassword } = req.body

    if(!password || !confirmPassword) throw new Error("Passwords cant be empty.")

    if(password != confirmPassword ) throw new Error("Password not matched.")

    const user = await User.findById(id)

    if(!user) throw new Error("User not Found")

    const hashedPassword = await hashpass(password)

    if(!hashedPassword) throw new Error("Error While Hashing Password.")

    user.password = hashedPassword

    await user.save()

    // Sending Alert Email.
    passwordChange(user.name, user.email)

    res.status(200).json({ success:true })
})


export const checkAuth = asyncHandler((req, res) => {
    return res.status(200).json({ success: true })
})