import type { PerfilModel } from "./PerfilModel";

export type UserModel = {
    id: bigint;
    nomeCompleto: string;
    email: string;
    cpf: string;
    dataNascimento: Date;
    registradoEm: Date;
    atualizadoEm: Date;

    perfil: PerfilModel;
}