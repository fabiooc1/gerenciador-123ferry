import { ViagensListing } from "./components/ViagensListing";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormDialog } from "@/components/FormDialog";
import { RegisterTripForm } from "./components/RegisterTripForm";
import { useTrips } from "@/hooks/useTrips";
import { Pagination } from "@/components/Pagination";
import { ITEMS_PER_PAGE } from "@/constants/pagination";

export function ViagensPage() {
  const {
    tripsPagination,
    isLoading,
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    setCurrentPage,
    loadTrips,
  } = useTrips();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl">Viagens</h1>
        <p>Cadastre, delete ou edite as viagens de ferry.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          {/* <form className="flex items-start gap-2">
              <InputGroup>
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>

                <InputGroupInput placeholder="Rota" />
                </InputGroup>
                
                <Button variant="secondary">Pesquisar</Button>
            </form> */}

          <FormDialog
            title="Cadastrar viagem"
            description="Cadastre uma nova viagem de ferry"
            trigger={
              <Button>
                <PlusCircle />
                Cadastrar viagem
              </Button>
            }
            onSuccess={() => loadTrips()}
          >
            {(_, onSuccess) => <RegisterTripForm onSuccess={onSuccess} />}
          </FormDialog>
        </div>

        <ViagensListing
          isLoading={isLoading}
          viagens={tripsPagination?.data || []}
        />

        {!isLoading && tripsPagination && (
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
            itemsPerPageOptions={ITEMS_PER_PAGE}
            totalPages={tripsPagination.meta.totalPaginas}
          />
        )}
      </div>
    </div>
  );
}
