import type { UserModel } from "@/models/UserModel";
import { userService } from "@/services/userService";
import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

type AuthContextProps = {
    user: UserModel | null;
    isLoadingAuth: boolean;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserModel | null>(null)
    const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false)

    async function loadUser() {
        try {
            setIsLoadingAuth(true)
            const userData = await userService.get()
            setUser(userData)
        } catch (error: any) {
            if (error instanceof AxiosError && error.response?.status === 401) {
                setUser(null)
            } else {
                toast.error(error.message || 'Serviço fora do ar. Tente novamente mais tarde.')
            }
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