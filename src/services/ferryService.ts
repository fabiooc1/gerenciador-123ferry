import { api } from "@/lib/axios";
import type { CreateFerryDto } from "./dtos/createFerryDto";
import { AxiosError } from "axios";
import type { FerryPaginationModel } from "@/models/FerryPaginationModel";

class FerryService {
  async create(createFerryDto: CreateFerryDto): Promise<void> {
    try {
     await api.post("/admin/ferry", createFerryDto);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.status === 409) {
          throw new Error("Já possui um ferry com esse nome")
        }
      }
      
      throw new Error(
        "Serviço de ferry indisponível no momento. Tente novamente mais tarde"
      );
    }
  }

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
