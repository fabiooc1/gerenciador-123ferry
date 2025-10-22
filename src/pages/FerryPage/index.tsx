import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";

export function FerryPage() {
  const ferries = [
    {
      id: 1,
      nome: "Calbo bolt",
      maximoDePessoas: 200,
      maximoDeVeiculosEmM2: 50,
      registradoEm: "2023-01-15",
      atualizadoEm: "2023-06-10",
    },
    {
      id: 2,
      nome: "Calbo bolt #2",
      maximoDePessoas: 200,
      maximoDeVeiculosEmM2: 50,
      registradoEm: "2023-01-15",
      atualizadoEm: "2023-06-10",
    },
  ];

  return (
    <main className="space-y-4 px-8 mt-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Gestão de Ferries</h1>
        <p>Adicione, edite ou visualize os ferries cadastrados no sistema.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <InputGroup className="w-2xs">
            <InputGroupInput placeholder="Pesquisar por nome" />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>

          <Button>
            <Plus />
            Cadastrar ferry
          </Button>
        </div>

        <Card className="py-2">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Passageiros</TableHead>
                  <TableHead>Veículos (m²)</TableHead>
                  <TableHead>Cadastrado em</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ferries.map((ferry) => (
                  <TableRow key={ferry.id}>
                    <TableCell>{ferry.nome}</TableCell>
                    <TableCell>{ferry.maximoDePessoas}</TableCell>
                    <TableCell>{ferry.maximoDeVeiculosEmM2}</TableCell>
                    <TableCell>{ferry.registradoEm}</TableCell>
                    <TableCell>x</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
