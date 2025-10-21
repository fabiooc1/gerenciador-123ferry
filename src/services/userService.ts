import type { UserModel } from "@/models/UserModel";
import axios from "axios";

class UserService {
    async get() {
        const response = await axios.get("/usuario/me")

        if (response.status !== 401) {
            throw new Error("Não autenticado", { cause: response.status })
        }
        
        return response.data as UserModel
    }
}

export const userService = new UserService();