import type { FerryModel } from "./FerryModel";
import type { RouteModel } from "./RouteModel";

export interface TripModel {
    id: number;
    dataPartida: string;
    dataChegada: string;
    criadaEm: string;
    atualizadaEm: string;
    criadaPorId: number;
    rota: RouteModel
    ferry: FerryModel
}