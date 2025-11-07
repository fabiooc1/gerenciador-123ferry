import type { HarborModel } from "./HarborModel"

export interface RouteModel {
    id: number
    nome: string
    destino: HarborModel
    origem: HarborModel
}