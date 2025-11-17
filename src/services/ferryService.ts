import { api } from "@/lib/axios";
import type { FerryPaginationModel } from "@/models/FerryPaginationModel";

class FerryService {
  async getAll(
    page: number,
    pageSize: number,
    filterByName?: string
  ) {
    try {
      const response = await api.get("/ferry", {
        params: {
          pageSize,
          page,
          filterByName,
        },
      });

      if (response.status != 200) {
        throw new Error("Ocorreu um erro ao buscar os ferries");
      }

      return response.data as FerryPaginationModel;
    } catch {
      throw new Error(
        "Serviço de ferry indisponível no momento. Tente novamente mais tarde"
      );
    }
  }
}

export const ferryService = new FerryService();
