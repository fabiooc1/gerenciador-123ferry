import { ITEMS_PER_PAGE } from "@/constants/pagination";
import type { TripsPaginationModel } from "@/models/TripsPaginationModel";
import { tripService } from "@/services/tripService";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function useTrips() {
    const [tripsPagination, setTripsPagination] = useState<TripsPaginationModel | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE[0])

    async function loadTrips() {
        try {
            setIsLoading(true)
            const tripsPaginationData = await tripService.getAll({
                page: currentPage,
                pageSize: itemsPerPage,
            })

            setTripsPagination(tripsPaginationData)
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
        loadTrips()
    }, [])

    return {
        tripsPagination,
        isLoading,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        loadTrips
    }
}