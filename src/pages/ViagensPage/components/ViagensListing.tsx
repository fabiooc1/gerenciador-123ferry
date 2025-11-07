import { TableLoadingData } from "@/components/TableLoadingData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TripModel } from "@/models/TripModel";
import { ViagemRow } from "./ViagemRow";

interface ViagensListingProps {
  viagens: TripModel[];
  isLoading: boolean;
}

export function ViagensListing({ viagens, isLoading }: ViagensListingProps) {
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
              <TableHead>Passageiros</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableLoadingData amountOfCols={5} amountOfRows={5} />
            ) : (
              viagens.map((trip) => <ViagemRow key={trip.id} trip={trip} />)
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
