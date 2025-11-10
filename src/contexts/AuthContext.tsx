import type { UserModel } from "@/models/UserModel";
import { authService } from "@/services/authService";
import type { LoginUserDto } from "@/services/dtos/loginUserDto";
import { userService } from "@/services/userService";
import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";

type AuthContextProps = {
    user: UserModel | null;
    login: (data: LoginUserDto) => Promise<void>;
    isLoadingAuth: boolean;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserModel | null>(null)
    const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true)

    async function fetchUser() {
        try {
          const userData = await userService.get();
          setUser(userData);
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response?.status === 401) {
              setUser(null);
              return;
            }
          }
        } finally {
            setIsLoadingAuth(false);
        }
      }
    
      async function login(data: LoginUserDto) {
        await authService.login(data);
        await fetchUser();
      }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
    <AuthContext.Provider value={{ user, login, isLoadingAuth }}>
        {children}
    </AuthContext.Provider>
    )
}