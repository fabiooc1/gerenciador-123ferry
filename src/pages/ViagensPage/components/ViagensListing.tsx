import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { TripModel } from "@/models/TripModel";
import { formatLogDate } from "@/utils/date";

interface ViagensListingProps {
  viagens: TripModel[]
}

export function ViagensListing({ viagens }: ViagensListingProps) {
  return (
    <Card className="rounded-md py-2">
      <CardContent className="px-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rota</TableHead>
              <TableHead>Partida</TableHead>
              <TableHead>Chegada</TableHead>
              <TableHead>Ferry</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {viagens.map(trip => (
                <TableRow key={trip.id}>
                    <TableCell>{trip.rota.nome}</TableCell>
                    <TableCell>{formatLogDate(trip.dataPartida)}</TableCell>
                    <TableCell>{formatLogDate(trip.dataChegada)}</TableCell>
                    <TableCell>{trip.ferry.nome}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
