import { ConfirmationDialog } from "@/components/ConfirmationDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { TicketModel } from "@/models/TicketModel";
import { ticketService } from "@/services/ticketService";
import { formatLogDate } from "@/utils/date";
import { DollarSign, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface BilheteRowProps {
  ticket: TicketModel;
  refetch: () => Promise<void>;
}

const StatusBadgeMap: Record<string, "secondary" | "default" | "destructive" | "outline"> = {
  CANCELADA: "destructive",
  PAGA: "default",
  RESERVADA: "secondary",
};

export function BilheteRow({ ticket, refetch }: BilheteRowProps) {
  const [isLoadingPaymentStatus, setIsLoadingPaymentStatus] = useState(false);
  const allowUpdatePayment = ticket.status === "RESERVADA" && !ticket.pagaEm;

  async function handleUpdatePayment() {
    try {
      setIsLoadingPaymentStatus(true);
      await ticketService.updatePaymentStatus(ticket.id);
      await refetch();
    } catch (error) {
        if (error instanceof Error) {
            toast.error(error.message);
            return
        }

        toast.error("Erro inesperado ao atualizar status de pagamento. Contate um desenvolvedor.");
    } finally {
        setIsLoadingPaymentStatus(false)
    }
  }

  return (
    <TableRow>
      <TableCell>{ticket.codigo}</TableCell>
      <TableCell>
        <Badge variant={StatusBadgeMap[ticket.status]}>{ticket.status}</Badge>
      </TableCell>
      <TableCell>{ticket.adquiridaPor.nomeCompleto}</TableCell>
      <TableCell>{ticket._count.passageiros}</TableCell>
      <TableCell>{ticket._count.veiculos}</TableCell>
      <TableCell>{formatLogDate(ticket.reservadaEm)}</TableCell>

      <TableCell>
        {allowUpdatePayment && (
          <ConfirmationDialog
            title="Alterar status de pagamento"
            description="Você está prestes a alterar o status para pago desse bilhete. Essa ação é irreversível."
            onConfirm={handleUpdatePayment}
          >
            <Button
            disabled={isLoadingPaymentStatus}
            variant="ghost"
            size="icon-sm"
            aria-label="Alterar status de pagamento"
          >
            {isLoadingPaymentStatus ? <Loader2 className="spin-in animate-spin" /> : <DollarSign />}
          </Button>
          </ConfirmationDialog>
        )}
      </TableCell>
    </TableRow>
  );
}
