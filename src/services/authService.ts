
import type { LoginUserDto } from "./dtos/loginUserDto";
import type { LoginUserResponseDto } from "./dtos/loginUserResponseDto";
import { api } from "@/lib/axios";

class AuthService {
  async login(data: LoginUserDto): Promise<void> {
    try {
      const response = await api.post("/auth/login", data);

      if (response.status === 401) {
        throw new Error("Credenciais inválidas", { cause: response.status });
      }

      if (response.status !== 200) {
        throw new Error(
          "Não foi possível fazer login. Tente novamente mais tarde",
          { cause: response.status }
        );
      }

      const loginUserResponseDto: LoginUserResponseDto = response.data;

      if (loginUserResponseDto.perfil.nome === "CLIENTE") {
        throw new Error("Acesso negado", { cause: 403 });
      }

      localStorage.setItem('api-jwt-token', loginUserResponseDto.token);
    } catch {
      throw new Error(
        "Não foi possível fazer login. Tente novamente mais tarde"
      );
    }
  }
}

export const authService = new AuthService();
