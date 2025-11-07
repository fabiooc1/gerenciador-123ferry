import type { FerryModel } from "./FerryModel";
import type { PaginationMetadataModel } from "./PaginationMetadataModel";

export interface FerryPaginationModel {
    data: FerryModel[],
    metadata: PaginationMetadataModel
}