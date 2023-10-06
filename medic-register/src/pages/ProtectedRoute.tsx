import { Navigate, Outlet } from "react-router-dom"
import { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const ingreso = localStorage.getItem("ingreso")

    if (ingreso == "" || !ingreso) {
        return <Navigate to="/" />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute