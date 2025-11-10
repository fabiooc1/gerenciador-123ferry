import { ITEMS_PER_PAGE } from "@/constants/pagination";
import type { TicketsPaginationModel } from "@/models/TicketsPaginationModel";
import { ticketService } from "@/services/ticketService";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useTickets() {
    const [ticketsPagination, setTicketsPagination] = useState<TicketsPaginationModel | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE[0])

    async function loadTickets() {
        try {
            setIsLoading(true)
            
            const ticketsPaginationData = await ticketService.getAll({
                page: currentPage,
                pageSize: itemsPerPage
            })

            setTicketsPagination(ticketsPaginationData)
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                 return
            }

            toast.error("Ocorreu um erro inesperado. Contante um administrador")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadTickets()
    }, [])

    return {
        ticketsPagination,
        isLoading,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        loadTickets
    }
}