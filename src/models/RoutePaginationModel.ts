import type { PaginationMetadataModel } from "./PaginationMetadataModel";
import type { RouteModel } from "./RouteModel";

export interface RoutePaginationModel {
    data: RouteModel[],
    metadata: PaginationMetadataModel
}