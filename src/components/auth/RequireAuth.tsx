import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function RequireAuth() {
    const { user, isLoadingAuth } = useAuth()

    if (isLoadingAuth) {
        return <div>Carregando...</div>
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}