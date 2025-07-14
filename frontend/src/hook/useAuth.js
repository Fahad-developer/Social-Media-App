import { useState, useEffect } from "react";
import api from '../axios/axiosConfig.js'


// Hook to check Authentication.

export function useAuth() {
    // useState
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        const check = async () => {
            try {
                await api.post('/api/v1/auth/checkAuth')
                setIsAuthenticated(true)
            } catch (error) {
                setIsAuthenticated(false)
            }
        }

        check()
    }, [])

    return isAuthenticated
}