import { api } from "@/lib/axios"
import type { TicketPaginationRequestDto } from "./dtos/TicketPaginationRequestDto"
import type { TicketsPaginationModel } from "@/models/TicketsPaginationModel"

class TicketService {
    async getAll(queryParams: TicketPaginationRequestDto) {
        try {
            const response = await api.get("/passagem", {
                params: queryParams
            })

            return response.data as TicketsPaginationModel
        } catch {
            throw new Error("Serviço de bilhetes fora do ar. Tente novamente mais tarde.")
        }
    }

    async updatePaymentStatus(ticketId: number) {
        await api.patch(`/admin/passagem/${ticketId}/paga`)
    }
}

export const ticketService = new TicketService()