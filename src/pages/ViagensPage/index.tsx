import { ViagensListing } from "./components/ViagensListing";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormDialog } from "@/components/FormDialog";
import { RegisterTripForm } from "./components/RegisterTripForm";
import { useTrips } from "@/hooks/useTrips";

export function ViagensPage() {
  const { tripsPagination, isLoading, loadTrips } = useTrips();

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
      </div>
    </div>
  );
}
