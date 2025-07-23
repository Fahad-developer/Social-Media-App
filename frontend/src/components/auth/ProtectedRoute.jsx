import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth } from '../../hook/useAuth'
// import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ allowedRoles }) {
    const isAuthenticated = useAuth()
    const { user } = useSelector(state => state.login)


    // Show loading indicator while checking auth
    if (isAuthenticated === null) {
        return <div>Loading...</div>
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    // ✅ If user role is NOT in allowedRoles, redirect to /Error
    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/Error" />
    }

    // Access granted
    return <Outlet />
}
