import type { RouteModel } from "./RouteModel";

export type TicketStatus = 'RESERVADA' | 'PAGA' | 'CANCELADA';

export interface TicketModel {
  id: number;
  codigo: string;
  status: TicketStatus;
  adquiridaPorId: number;
  adquiridaPor: {
    nomeCompleto: string;
  };
  viagemId: number;
  reservadaEm: string;
  pagaEm: string | null;
  canceladaEm: string | null;
  auditadaPorId: number | null;
  _count: {
    passageiros: number;
    veiculos: number;
  };
  viagem: {
    rota: RouteModel
    dataPartida: string;
    dataChegada: string;
  };
}