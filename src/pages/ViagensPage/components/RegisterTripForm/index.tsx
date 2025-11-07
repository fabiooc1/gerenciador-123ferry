import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FerryPaginationModel } from "@/models/FerryPaginationModel";
import type { RoutePaginationModel } from "@/models/RoutePaginationModel";
import { ferryService } from "@/services/ferryService";
import { routeService } from "@/services/routeService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { registerTripFormSchema, type RegisterTripFormData } from "./schema";
import { withMask } from "use-mask-input";
import { Input } from "@/components/ui/input";
import { tripService } from "@/services/tripService";
import { toast } from "sonner";

interface RegisterTripFormProps {
  onSuccess: () => void;
}

export function RegisterTripForm({ onSuccess }: RegisterTripFormProps) {
  const [routes, setRoutes] = useState<RoutePaginationModel | null>(null);
  const [ferries, setFerries] = useState<FerryPaginationModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm({
    resolver: zodResolver(registerTripFormSchema),
    defaultValues: {
      ferryId: 0,
      routeId: 0,
      arrivalDatetime: "",
      departureDatetime: "",
    },
  });

  async function loadFormDependecies() {
    try {
      setIsLoading(true);
      const [routesData, ferriesData] = await Promise.all([
        routeService.getAll(1, 10),
        ferryService.getAll(1, 10),
      ]);

      setRoutes(routesData);
      setFerries(ferriesData);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadFormDependecies();
  }, []);

  async function onRegisterTrip(data: RegisterTripFormData) {
    try {
      await tripService.create({
        rotaId: data.routeId,
        ferryId: data.ferryId,
        dataPartida: data.departureDatetime.toISOString(),
        dataChegada: data.arrivalDatetime.toISOString()
      })

      onSuccess();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <form className="space-y-6" onSubmit={form.handleSubmit(onRegisterTrip)}>
      <Form {...form}>
        <FormField
          control={form.control}
          name="routeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rota*</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        isLoading ? "Carregando..." : "Selecione uma rota"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {routes &&
                      routes.data.map((route) => (
                        <SelectItem key={route.id} value={route.id.toString()}>
                          {route.nome}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ferryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ferry*</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue
                      placeholder={
                        isLoading ? "Carregando..." : "Selecione um ferry"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {ferries &&
                      ferries.data.map((ferry) => (
                        <SelectItem key={ferry.id} value={ferry.id.toString()}>
                          {ferry.nome}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="departureDatetime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de partida*</FormLabel>
              <FormControl ref={withMask("99/99/9999 99:99")}>
                <Input
                  type="datetime-local"
                  {...field}
                  placeholder="DD/MM/AAAA 00:00"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="arrivalDatetime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de chegada*</FormLabel>
              <FormControl ref={withMask("99/99/9999 99:99")}>
                <Input
                  type="datetime-local"
                  {...field}
                  placeholder="DD/MM/AAAA 00:00"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>

      <div className="flex justify-end">
        <Button type="submit">Registrar</Button>
      </div>
    </form>
  );
}
