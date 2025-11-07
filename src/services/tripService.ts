import { api } from "@/lib/axios";
import { type TripsPaginationRequestDto } from "./dtos/TripsPaginationRequestDto";
import type { CreateTripRequestDto } from "./dtos/CreateTripRequestDto";
import { AxiosError } from "axios";
import type { TripModel } from "@/models/TripModel";
import type { TripsPaginationModel } from "@/models/TripsPaginationModel";

class TripService {
    async getAll(queryParams: TripsPaginationRequestDto) {
        try {
            const response = await api.get("/viagem", {
                params: queryParams
            })

            return response.data as TripsPaginationModel
        } catch {
            throw new Error("Serviço de viagens fora do ar. Tente novamente mais tarde.")
        }
    }

    async create(data: CreateTripRequestDto) {
        try {
            const response = await api.post("/admin/viagem", data)
            return response.data as TripModel
        } catch (error) {
            if (error instanceof AxiosError) {
                throw new Error(error.message)
            }

            throw new Error("Ocorreu um erro inesperado. Contate um desenvolvedor.")
        }
    }
}

export const tripService = new TripService()