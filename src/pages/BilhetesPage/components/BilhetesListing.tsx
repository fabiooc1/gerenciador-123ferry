import { TableLoadingData } from "@/components/TableLoadingData";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { TicketModel } from "@/models/TicketModel";
import { BilheteRow } from "./BilheteRow";

interface BilhetesListingProps {
  bilhetes: TicketModel[];
  isLoading: boolean;
  refetch: () => Promise<void>;
}

export function BilhetesListing({ bilhetes, isLoading, refetch }: BilhetesListingProps) {
  return (
    <Card className="rounded-md py-2">
      <CardContent className="px-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Adquirida por</TableHead>
              <TableHead>Passageiros</TableHead>
              <TableHead>Veículos</TableHead>
              <TableHead>Reservada em</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableLoadingData amountOfCols={5} amountOfRows={5} />
            ) : (
              bilhetes.map((ticket) => <BilheteRow key={ticket.id} ticket={ticket} refetch={refetch} />)
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
