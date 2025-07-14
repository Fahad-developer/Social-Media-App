import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth.js'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ allowedRoles }) {
    const { user } = useSelector(state => state.login)
    const isAuth = useAuth()

    // Loading phase
    if (isAuth === null || !user) {
        return <p>.....Loading</p>
    }

    // Not authenticated
    if (!isAuth) {
        return <Navigate to="/login" />
    }

    // ✅ If user role is NOT in allowedRoles, redirect to /Error
    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/Error" />
    }

    // Access granted
    return <Outlet />
}
