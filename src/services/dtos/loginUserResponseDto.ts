import type { PerfilModel } from "@/models/PerfilModel";

export type LoginUserResponseDto = {
    token: string;
    perfil: PerfilModel
}