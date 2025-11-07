import type { FerryModel } from "./FerryModel";
import type { PaginationMetadata } from "./PaginationMetadata";

export interface FerryPaginationModel {
    data: FerryModel[],
    metadata: PaginationMetadata
}