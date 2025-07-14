import rateLimit from "express-rate-limit";

export const signUpLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    message: "To many accounts created. Try again after 15 minutes."
})