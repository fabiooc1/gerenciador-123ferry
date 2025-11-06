import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function RequireAuth() {
    const { user, isLoadingAuth } = useAuth()

    if (isLoadingAuth) {
        return <div>Carregando suas informações...</div>
    }

    if (!isLoadingAuth && !user) {
        return <Navigate to="/auth/login" replace />
    }

    return <Outlet />
}