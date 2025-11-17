import { z } from "zod";

export const registerTripFormSchema = z
  .object({
    routeValue: z.string().min(1, "Rota é obrigatório"),
    ferryValue: z.string().min(1, "Ferry é obrigatório"),
    departureDatetime: z.string().min(1, "Data de partida é obrigatório"),
    arrivalDatetime: z.string().min(1, "Data de chegada é obrigatória"),
  })
  .refine(
    (data) => {
      const departure = new Date(data.departureDatetime);
      const arrival = new Date(data.arrivalDatetime);

      if (isNaN(departure.getTime()) || isNaN(arrival.getTime())) {
        return false;
      }

      return departure < arrival;
    },
    {
      message: "Data de partida deve ser menor que a data de chegada",
      path: ["arrivalDatetime"],
    }
  );

export type RegisterTripFormData = z.infer<typeof registerTripFormSchema>;