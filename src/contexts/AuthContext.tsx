import type { UserModel } from "@/models/UserModel";
import { userService } from "@/services/userService";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type AuthContextProps = {
    user: UserModel | null;
    isLoadingAuth: boolean;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserModel | null>(null)
    const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true)

    const navigate = useNavigate()

    async function loadUser() {
        try {
            const userData = await userService.get()
            setUser(userData)
        } catch (error: any) {
            navigate('/login')
        } finally {
            setIsLoadingAuth(false)
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
    <AuthContext.Provider value={{ user, isLoadingAuth }}>
        {children}
    </AuthContext.Provider>
    )
}