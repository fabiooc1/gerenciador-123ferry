import { z } from "zod";

export const registerTripFormSchema = z
  .object({
    routeId: z.coerce.number().min(1, "Rota é obrigatório"),
    ferryId: z.coerce.number().min(1, "Ferry é obrigatório"),
    departureDatetime: z.coerce
      .date("Data de partida é obrigatório")
      .min(16, "Formato de data de partida inválido"),
    arrivalDatetime: z.coerce
      .date("Formato de data de chegada inválida")
      .min(16, "Data de chegada é obrigatória"),
  })
  .refine(
    (data) => {
      return data.departureDatetime < data.arrivalDatetime;
    },
    {
      message: "Data de partida deve ser menor que a data de chegada",
      path: ["arrivalDatetime"],
    }
  );

export type RegisterTripFormData = z.infer<typeof registerTripFormSchema>;
