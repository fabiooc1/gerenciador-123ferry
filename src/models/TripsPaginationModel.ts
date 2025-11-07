import type { TripModel } from "@/models/TripModel";
import type { PaginationMetadata } from "./PaginationMetadata";

export interface TripsPaginationModel {
    data: TripModel[],
    metadata: PaginationMetadata
}