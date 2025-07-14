import express from 'express'
import { login, signUp, logout, changePassword, checkAuth } from '../../controllers/auth/auth-controller.js'
import { auth } from '../../middlewares/auth/auth-middleware.js'
// import { loginLimiter } from '../../middlewares/rateLimiter/LoginLimiter.js'
import { signUpLimiter } from '../../middlewares/rateLimiter/SignLimiter.js'
import { authorizeUser } from '../../middlewares/authorize/authorize-middleware.js'

const router = express.Router()

router.post('/createAccount', signUpLimiter, signUp)
router.post('/login', login)
router.post('/logout', auth, logout)
router.post('/changePassword', auth, authorizeUser("user"), changePassword)
router.post('/checkAuth', auth, checkAuth)

export default router