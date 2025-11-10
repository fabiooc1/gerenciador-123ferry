import { useTickets } from "@/hooks/useTickets";
import { BilhetesListing } from "./components/BilhetesListing";

export function BilhetesPage() {
  const { ticketsPagination, isLoading, loadTickets: refetch } = useTickets();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl">Bilhetes</h1>
        <p>
          Cadastre, delete, cancele, atualize status do pagamento de uma
          passagem.
        </p>
      </div>

      <div className="space-y-4">
        <BilhetesListing
          bilhetes={ticketsPagination?.data || []}
          isLoading={isLoading}
          refetch={refetch}
        />
      </div>
    </div>
  );
}
