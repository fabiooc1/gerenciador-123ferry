export interface TripsPaginationRequestDto {
    page: number
    pageSize: number
    rotaId?: number
    dataPartida?: string
    dataPartidaOrdem: "asc" | "desc"
}