import type { PaginationMetadata } from "./PaginationMetadata";
import type { RouteModel } from "./RouteModel";

export interface RoutePaginationModel {
    data: RouteModel[],
    metadata: PaginationMetadata
}