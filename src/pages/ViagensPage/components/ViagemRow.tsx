import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { TripModel } from "@/models/TripModel";
import { formatLogDate } from "@/utils/date";
import { Pencil, Trash } from "lucide-react";

interface ViagemRowProps {
  trip: TripModel;
}

export function ViagemRow({ trip }: ViagemRowProps) {
  return (
    <TableRow key={trip.id}>
      <TableCell>{trip.rota.nome}</TableCell>
      <TableCell>{formatLogDate(trip.dataPartida)}</TableCell>
      <TableCell>{formatLogDate(trip.dataChegada)}</TableCell>
      <TableCell>{trip.ferry.nome}</TableCell>
      <TableCell>{trip.quantidadeDePassageiros}</TableCell>
      <TableCell>
        <Button disabled={true} size="icon-sm" variant="ghost">
          <Pencil color="blue" />
        </Button>

        <Button disabled={true} size="icon-sm" variant="ghost">
          <Trash color="red" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
