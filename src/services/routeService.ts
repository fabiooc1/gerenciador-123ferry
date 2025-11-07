import { api } from "@/lib/axios";
import type { RoutePaginationModel } from "@/models/RoutePaginationModel";

class RouteService {
//   async create(createFerryDto: CreateFerryDto): Promise<void> {
//     try {
//      await api.post("/admin/ferry", createFerryDto);
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         if (error.status === 409) {
//           throw new Error("Já possui um ferry com esse nome")
//         }
//       }
      
//       throw new Error(
//         "Serviço de ferry indisponível no momento. Tente novamente mais tarde"
//       );
//     }
//   }

  async getAll(
    page: number,
    pageSize: number,
  ) {
    try {
      const response = await api.get("/rota", {
        params: {
          pageSize,
          page,
        },
      });

      return response.data as RoutePaginationModel;
    } catch {
      throw new Error(
        "Serviço de rotas indisponível no momento. Tente novamente mais tarde"
      );
    }
  }
}

export const routeService = new RouteService();
