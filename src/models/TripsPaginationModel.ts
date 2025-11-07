import type { TripModel } from "@/models/TripModel";
import type { PaginationMetadataModel } from "./PaginationMetadataModel";

export interface TripsPaginationModel {
    data: TripModel[],
    metadata: PaginationMetadataModel
}