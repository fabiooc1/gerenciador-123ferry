import type { PaginationMetadataModel } from "./PaginationMetadataModel";
import type { TicketModel } from "./TicketModel";

export interface TicketsPaginationModel {
    data: TicketModel[];
    metadata: PaginationMetadataModel
}