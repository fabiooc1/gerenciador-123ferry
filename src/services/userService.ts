import { api } from "@/lib/axios";
import type { UserModel } from "@/models/UserModel";

class UserService {
    async get() {
        const response = await api.get("/usuario/me")

        if (response.status === 401) {
            throw new Error("Não autenticado", { cause: response.status })
        }

        if (response.status !== 200) {
            throw new Error("Erro ao buscar dados do usuário", { cause: response.status })
        }
        
        return response.data as UserModel
    }
}

export const userService = new UserService();