import rateLimit from 'express-rate-limit'

export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many login attempts. Try again after 15 minutes."
})