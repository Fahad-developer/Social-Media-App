import { useState, useEffect } from "react";


// Hook to check Authentication.

export function useAuth() {
    // useState
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    return isAuthenticated
}


// const check = async () => {
//             try {
//                 await api.get('/api/v1/auth/checkAuth')
//                 setIsAuthenticated(true)
//             } catch (error) {
//                 setIsAuthenticated(false)
//             }
//         }

//         check()